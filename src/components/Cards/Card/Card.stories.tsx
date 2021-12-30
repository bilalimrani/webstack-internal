import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardComp from './Card';

export default {
    title: 'Components/Card',
    component: CardComp,
} as ComponentMeta<typeof CardComp>;

const Template: ComponentStory<typeof CardComp> = (args) => (
    <CardComp {...args} />
);

export const Card = Template.bind({});
Card.args = {
    title: 'Heading',
    subHeading: 'Subhead'
};
