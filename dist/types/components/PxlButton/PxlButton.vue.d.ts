export declare type PxlButtonType = "primary" | "secondary" | "danger" | "icon";
export declare type PxlButtonTag = "button" | "a" | "router-link" | "div";
export interface PxlButtonProps {
    /**
     * Required. Used to create test id's for the button.
     */
    name: string;
    /**
     * Defines the title attribute value for the button.
     *
     * Also user for `aria-title`.
     */
    title?: string;
    /**
     * Defines if button is disabled or not.
     */
    disabled?: boolean;
    /**
     * Sets button style to outline.
     */
    outline?: boolean;
    /**
     * Sets button style to outline.
     */
    link?: boolean;
    /**
     * Sets button width to 100%.
     */
    fullWidth?: boolean;
    /**
     * Makes button fully rounded
     */
    fullRounded?: boolean;
    /**
     * Defines the component tag for the button.
     */
    tag?: PxlButtonTag;
    /**
     * Defines button type.
     */
    type?: PxlButtonType;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PxlButtonProps>, {
    tag: string;
    type: string;
    fullWidth: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PxlButtonProps>, {
    tag: string;
    type: string;
    fullWidth: boolean;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    fullWidth: boolean;
    tag: PxlButtonTag;
    type: PxlButtonType;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
