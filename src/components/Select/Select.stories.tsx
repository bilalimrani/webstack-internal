import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectComp from './Select';

export default {
    title: 'Webstacks/Select',
    component: SelectComp,
} as ComponentMeta<typeof SelectComp>;

const Template: ComponentStory<typeof SelectComp> = (args) => <SelectComp {...args} />;

export const Select = Template.bind({});
Select.args = {
    list: ['one', 'two', 'three'],
    label: 'Select'
};
