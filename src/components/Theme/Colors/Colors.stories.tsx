import { ComponentStory, ComponentMeta } from '@storybook/react';
import Colors from './Colors';

export default {
    title: 'Webstacks/Theme',
    component: Colors,
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const colors = Template.bind({});
colors.args = {};