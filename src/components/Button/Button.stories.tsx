import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Webstacks/Buttons',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    btnType: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  label: 'Talk to Sales',
  icon: true,
  size: 'large',
  disabled: false,
};