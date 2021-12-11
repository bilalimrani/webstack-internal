import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Webstacks/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  label: 'Talk to Sales',
  icon: false,
  size: 'large',
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Talk to Sales',
  btnType: 'secondary',
  icon: false,
  disabled: false
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Talk to Sales',
  btnType: 'tertiary',
  icon: true,
  disabled: false,
  size: 'large',
};
