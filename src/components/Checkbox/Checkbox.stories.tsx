import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxComp from './Checkbox';

export default {
  title: 'Molecules/Inputs/Checkbox',
  component: CheckboxComp,
} as ComponentMeta<typeof CheckboxComp>;

const Template: ComponentStory<typeof CheckboxComp> = (args) => (
  <CheckboxComp {...args} />
);

export const Checkbox = Template.bind({});
Checkbox.args = {
  disabled: true,
  label: 'Remember me',
};
