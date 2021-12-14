

import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroupComp from './RadioGroup';

const list = ['Male', 'Female', 'Other']

export default {
    title: 'Webstacks/Radio',
    component: RadioGroupComp,
} as ComponentMeta<typeof RadioGroupComp>;

const Template: ComponentStory<typeof RadioGroupComp> = (args) => <RadioGroupComp {...args} />;

export const RadioGroup = Template.bind({});
RadioGroup.args = {
    list,
    // defaultValue: 'Female',
    row: false,
    name: 'select'
};
