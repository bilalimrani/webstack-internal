import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxComp from './Checkbox';

export default {
    title: 'Webstacks/Checkbox',
    component: CheckboxComp,
} as ComponentMeta<typeof CheckboxComp>;

const Template: ComponentStory<typeof CheckboxComp> = () => <CheckboxComp />;

export const Checkbox = Template.bind({});
Checkbox.args = {};
