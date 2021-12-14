import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioComp from './Radio';

export default {
    title: 'Webstacks/Radio',
    component: RadioComp,
} as ComponentMeta<typeof RadioComp>;

const Template: ComponentStory<typeof RadioComp> = () => <RadioComp />;

export const Radio = Template.bind({});
Radio.args = {};
