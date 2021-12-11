import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Webstacks/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Talk to Sales',
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  label: 'Talk to Sales',
  icon: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Talk to Sales',
  btnType: 'secondary',
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  label: 'Talk to Sales',
  btnType: 'secondary',
  icon: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Talk to Sales',
  btnType: 'tertiary',
};

export const TertiaryIcon = Template.bind({});
TertiaryIcon.args = {
  label: 'Talk to Sales',
  btnType: 'tertiary',
  icon: true
};


// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   label: 'Talk to Sales',
//   btnType: 'tertiary',
// };

// export const TertiaryIcon = Template.bind({});
// TertiaryIcon.args = {
//   label: 'Talk to Sales',
//   btnType: 'tertiary',
//   icon: true
// };