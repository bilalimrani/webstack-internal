import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

export default {
    title: 'Webstacks/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = () => <Slider />;

export const SliderSingle = Template.bind({});
SliderSingle.args = {};
