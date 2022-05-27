<script setup lang="ts">
import { computed } from "vue";

export type BaseButtonType = "primary" | "secondary" | "icon";
export type BaseButtonTag = "button" | "a" | "router-link" | "div";
export interface BaseButtonProps {
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
  tag?: BaseButtonTag;
  /**
   * Defines button type.
   */
  type?: BaseButtonType;
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  tag: 'button',
  type: 'primary',
  fullWidth: false,
});

const emit = defineEmits(['click']);

const classes = computed(() => {
  const base = 'baseButton';
  const buttonType = props.outline ? `${props.type}Outline` : props.type

  return [
    base,
    `${base}-${buttonType}`,
    {
      [`${base}-w-full`]: props.fullWidth,
      [`${base}-rounded-full`]: props.fullRounded,
      [`${base}-link`]: props.link,
      [`${base}-outline`]: props.outline,
    },
  ];
});

function onClick(event: Event) {
  emit('click', event);
}
</script>

<template>
  <component
    :is="props.tag"
    :name="props.name"
    :title="props.title"
    :aria-label="props.title"
    :data-test-id="props.name && `baseBtn-${props.name}`"
    :class="classes"
    :disabled="props.disabled ? true : undefined"
    @click="onClick"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss">
@import "./BaseButton.scss";
</style>