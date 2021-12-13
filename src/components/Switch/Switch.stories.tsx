import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
    title: 'Webstacks/Switch',
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchButton = Template.bind({});
SwitchButton.args = {};
