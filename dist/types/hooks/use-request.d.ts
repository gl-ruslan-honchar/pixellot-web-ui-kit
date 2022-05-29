declare type DataType = 'text' | 'json' | 'blob' | 'arrayBuffer' | 'formData';
export interface RequestOptions {
    body?: any;
    baseUrl?: string;
    responseType?: DataType;
}
export interface GlobalRequestOptions {
    baseUrl?: string;
    beforeRequest?: (fetchOptions: RequestInit, requestOptions: RequestOptions) => void;
}
export declare function useRequest(globalOptions: GlobalRequestOptions): {
    isError: import("vue").ComputedRef<boolean>;
    loading: import("vue").ComputedRef<boolean>;
    error: import("vue").Ref<string>;
    request: {
        get: <T>(url: string, options?: RequestOptions | undefined) => Promise<T>;
        post: <T_1>(url: string, options?: RequestOptions | undefined) => Promise<T_1>;
        put: <T_2>(url: string, options?: RequestOptions | undefined) => Promise<T_2>;
        patch: <T_3>(url: string, options?: RequestOptions | undefined) => Promise<T_3>;
        delete: <T_4>(url: string, options?: RequestOptions | undefined) => Promise<T_4>;
    };
};
export {};
