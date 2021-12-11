import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './';

export default {
    title: 'Webstacks/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'text',
    label: 'Email Address'
};
