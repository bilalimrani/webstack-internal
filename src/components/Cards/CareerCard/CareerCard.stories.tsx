import { ComponentStory, ComponentMeta } from '@storybook/react';
import CareerCardComp from './CareerCard';

export default {
    title: 'Webstacks/CareerCard',
    component: CareerCardComp,
} as ComponentMeta<typeof CareerCardComp>;

const Template: ComponentStory<typeof CareerCardComp> = (args) => <CareerCardComp {...args} />;

export const CareerCard = Template.bind({});
CareerCard.args = {
    title: 'Account Executive - Mid-Market',
    heading: 'Sales',
    details: 'San Diego, CA'
};
