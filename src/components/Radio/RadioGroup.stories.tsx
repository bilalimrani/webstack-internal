import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroupComp from './RadioGroup';

const list = ['Male', 'Female', 'Other'];

export default {
  title: 'Molecules/Inputs/Radio/RadioGroup',
  component: RadioGroupComp,
} as ComponentMeta<typeof RadioGroupComp>;

const Template: ComponentStory<typeof RadioGroupComp> = (args) => (
  <RadioGroupComp {...args} />
);

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  list,
  row: false,
  name: 'select',
};
