import { ComponentStory, ComponentMeta } from '@storybook/react';
import TypographyComp from './Typography';

export default {
    title: 'Webstacks/Theme',
    component: TypographyComp,
} as ComponentMeta<typeof TypographyComp>;

const Template: ComponentStory<typeof TypographyComp> = () => <TypographyComp />;

export const Typography = Template.bind({});
Typography.args = {};