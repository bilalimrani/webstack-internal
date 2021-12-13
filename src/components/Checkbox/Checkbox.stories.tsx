import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
    title: 'Webstacks/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => <Checkbox />;

export const CheckboxSingle = Template.bind({});
CheckboxSingle.args = {};
