import { ref, computed } from 'vue'

enum REQUEST_STATE {
  INIT = 'REQUEST_INIT',
  IN_PROGRESS = 'REQUEST_IN_PROGRESS',
  ERROR = 'REQUEST_ERROR',
  SUCCESS = 'REQUEST_SUCCESS',
}

type DataType = 'text' | 'json' | 'blob' | 'arrayBuffer' | 'formData';
// type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export interface RequestOptions {
  body?: any;
  baseUrl?: string;
  responseType?: DataType;
}

export interface GlobalRequestOptions {
  baseUrl?: string;
  beforeRequest?: (fetchOptions: RequestInit, requestOptions: RequestOptions) => void;
}


export function useRequest(globalOptions: GlobalRequestOptions) {
  const requestState = ref(REQUEST_STATE.INIT);
  const isError = computed(() => requestState.value === REQUEST_STATE.ERROR);
  const loading = computed(() => requestState.value === REQUEST_STATE.IN_PROGRESS);
  const error = ref('');

  async function makeRequest<T>(url: string, options: RequestOptions = {}, initFetchOptions?: RequestInit): Promise<T> {
    error.value = '';
    requestState.value = REQUEST_STATE.IN_PROGRESS;
    const baseUrl = options.baseUrl || globalOptions.baseUrl || '/';
    const defaultErrorMessage = 'Server error occurred. Please try again later';
    const defaultFetchOptions: RequestInit = {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const fetchOptions = Object.assign(defaultFetchOptions, initFetchOptions);
    const fetchUrl = `${baseUrl}${url}`;

    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body);
    }

    if (globalOptions?.beforeRequest) {
      globalOptions?.beforeRequest(fetchOptions, options);
    }

    return new Promise((resolve, reject) => {
      fetch(fetchUrl, fetchOptions)
        .then(async (fetchResponse) => {
          if (!fetchResponse.ok) {
            return Promise.reject(fetchResponse);
          }

          requestState.value = REQUEST_STATE.SUCCESS;

          const responseType = options.responseType || 'json';

          return fetchResponse[responseType]();
        })
        .then((response) => {
          if (response.error) {
            error.value = response.message || defaultErrorMessage;

            return reject(new Error(error.value));
          }

          return response;
        })
        .then((response) => resolve(response))
        .catch(async (fetchResponseError) => {
          requestState.value = REQUEST_STATE.ERROR;

          const responseType = options.responseType || 'json';

          if (fetchResponseError[responseType]) {
            const fetchError = await fetchResponseError[responseType]().catch(() => {});

            error.value = fetchError?.errors?.[0]?.details || fetchError?.message || defaultErrorMessage;
          } else {
            error.value = fetchResponseError.message || defaultErrorMessage;
          }

          reject(new Error(error.value));
        });
    });
  }

  const request = {
    get: <T>(url: string, options?: RequestOptions) => makeRequest<T>(url, options, { method: 'GET' }),
    post: <T>(url: string, options?: RequestOptions) => makeRequest<T>(url, options, { method: 'POST' }),
    put: <T>(url: string, options?: RequestOptions) => makeRequest<T>(url, options, { method: 'PUT' }),
    patch: <T>(url: string, options?: RequestOptions) => makeRequest<T>(url, options, { method: 'PATCH' }),
    delete: <T>(url: string, options?: RequestOptions) => makeRequest<T>(url, options, { method: 'DELETE' }),
  };

  return { isError, loading, error, request };
}
