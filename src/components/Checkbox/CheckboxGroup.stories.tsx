import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxGroupComp from './CheckboxGroup';

const options =
    [
        { label: "US", value: "us", disabled: false },
        { label: "CA", value: "ca", disabled: false },
        { label: "AUS", value: "aus", disabled: true }
    ]

export default {
    title: 'Webstacks/Checkbox',
    component: CheckboxGroupComp,
} as ComponentMeta<typeof CheckboxGroupComp>;

const Template: ComponentStory<typeof CheckboxGroupComp> = (args) => <CheckboxGroupComp {...args} />;

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = {
    options,
    row: false
};
