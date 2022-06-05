import { defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, withCtx, renderSlot, ref } from "vue";
var PxlButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "PxlButton",
  props: {
    name: null,
    title: null,
    disabled: { type: Boolean },
    outline: { type: Boolean },
    link: { type: Boolean },
    fullWidth: { type: Boolean, default: false },
    fullRounded: { type: Boolean },
    tag: { default: "button" },
    type: { default: "primary" }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const classes = computed(() => {
      const base = "pxlButton";
      const buttonType = props.outline ? `${props.type}Outline` : props.type;
      return [
        base,
        `${base}-${buttonType}`,
        {
          [`${base}-w-full`]: props.fullWidth,
          [`${base}-rounded-full`]: props.fullRounded,
          [`${base}-link`]: props.link,
          [`${base}-outline`]: props.outline
        }
      ];
    });
    function onClick(event) {
      emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(props.tag), {
        ref: "rootRef",
        name: props.name,
        title: props.title,
        "aria-label": props.title,
        "data-test-id": props.name && `pxlBtn-${props.name}`,
        class: normalizeClass(unref(classes)),
        disabled: props.disabled ? true : void 0,
        onClick
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["name", "title", "aria-label", "data-test-id", "class", "disabled"]);
    };
  }
});
function useRequest(globalOptions) {
  const requestState = ref("REQUEST_INIT");
  const isError = computed(() => requestState.value === "REQUEST_ERROR");
  const loading = computed(() => requestState.value === "REQUEST_IN_PROGRESS");
  const error = ref("");
  async function makeRequest(url, options = {}, initFetchOptions) {
    error.value = "";
    requestState.value = "REQUEST_IN_PROGRESS";
    const baseUrl = options.baseUrl || globalOptions.baseUrl || "/";
    const defaultErrorMessage = "Server error occurred. Please try again later";
    const defaultFetchOptions = {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    const fetchOptions = Object.assign(defaultFetchOptions, initFetchOptions);
    const fetchUrl = `${baseUrl}${url}`;
    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body);
    }
    if (globalOptions == null ? void 0 : globalOptions.beforeRequest) {
      globalOptions == null ? void 0 : globalOptions.beforeRequest(fetchOptions, options);
    }
    return new Promise((resolve, reject) => {
      fetch(fetchUrl, fetchOptions).then(async (fetchResponse) => {
        if (!fetchResponse.ok) {
          return Promise.reject(fetchResponse);
        }
        requestState.value = "REQUEST_SUCCESS";
        const responseType = options.responseType || "json";
        if (globalOptions == null ? void 0 : globalOptions.formatResponse) {
          return globalOptions == null ? void 0 : globalOptions.formatResponse(fetchResponse, options);
        }
        return fetchResponse[responseType]();
      }).then((response) => resolve(response)).catch(async (fetchResponseError) => {
        var _a, _b;
        requestState.value = "REQUEST_ERROR";
        const responseType = options.responseType || "json";
        if (fetchResponseError[responseType]) {
          const fetchError = await fetchResponseError[responseType]().catch(() => {
          });
          error.value = ((_b = (_a = fetchError == null ? void 0 : fetchError.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.details) || (fetchError == null ? void 0 : fetchError.message) || defaultErrorMessage;
        } else {
          error.value = fetchResponseError.message || defaultErrorMessage;
        }
        reject(new Error(error.value));
      });
    });
  }
  const request = {
    get: (url, options) => makeRequest(url, options, { method: "GET" }),
    post: (url, options) => makeRequest(url, options, { method: "POST" }),
    put: (url, options) => makeRequest(url, options, { method: "PUT" }),
    patch: (url, options) => makeRequest(url, options, { method: "PATCH" }),
    delete: (url, options) => makeRequest(url, options, { method: "DELETE" })
  };
  return { isError, loading, error, request };
}
export { _sfc_main as PxlButton, useRequest };
