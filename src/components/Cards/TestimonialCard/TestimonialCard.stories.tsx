import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestimonialCardComp from './TestimonialCard';
import userImage from '../../../assets/images/userImage.png';

export default {
    title: 'Components/TestimonialCard',
    component: TestimonialCardComp,
} as ComponentMeta<typeof TestimonialCardComp>;

const Template: ComponentStory<typeof TestimonialCardComp> = (args) => (
    <TestimonialCardComp {...args} />
);

export const TestimonialCard = Template.bind({});
TestimonialCard.args = {
    details: '"Webstacks is one of the top agencies I\'ve ever worked with – their continued growth is no surprise."',
    userLogo: userImage,
    userName: 'Bryan Olshock',
    userDesignation: 'VP of Pipeline Generation'
};
