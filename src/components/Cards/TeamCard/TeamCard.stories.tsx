import { ComponentStory, ComponentMeta } from '@storybook/react';
import TeamCardComp from './TeamCard';
import userImage from '../../../assets/images/team-card.png';

export default {
    title: 'Components/TeamCard',
    component: TeamCardComp,
} as ComponentMeta<typeof TeamCardComp>;

const Template: ComponentStory<typeof TeamCardComp> = (args) => (
    <TeamCardComp {...args} />
);

export const TeamCard = Template.bind({});
TeamCard.args = {
    userLogo: userImage,
    title: 'Hear from Nick',
    designation: 'Lead Designer',
};
