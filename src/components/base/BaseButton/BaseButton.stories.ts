import type { Story } from '@storybook/vue3';
import BaseButton from './BaseButton.vue';

const tags = ['button', 'a', 'router-link', 'div'];
const types = ['primary', 'secondary', 'icon'];

export default {
  title: 'Base/BaseButton',
  component: BaseButton,
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: tags,
    },
    type: {
      control: { type: 'select' },
      options: types,
    },
    onClick: { action: 'click' },
  },
  // decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};

const Template: Story = (args) => ({
  components: { BaseButton },
  setup: () => ({ args }),
  template: `<base-button v-bind="args">{{ args.label }}</base-button>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default button',
  name: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary button',
  name: 'primary',
  type: 'primary',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  label: 'Primary outline button',
  name: 'primary-outline',
  type: 'primary',
  outline: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary button',
  name: 'secondary',
  type: 'secondary',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  label: 'Secondary outline button',
  name: 'secondary-outline',
  type: 'secondary',
  outline: true,
};

export const Link = Template.bind({});
Link.args = {
  label: 'Link',
  name: 'link',
  link: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled button',
  name: 'disabled',
  disabled: true,
};
