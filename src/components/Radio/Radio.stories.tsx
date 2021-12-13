import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';

export default {
    title: 'Webstacks/RadioComp',
    component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = () => <Radio />;

export const RadioSingle = Template.bind({});
RadioSingle.args = {};
