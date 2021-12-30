import { ComponentStory, ComponentMeta } from '@storybook/react';
import CaseStudyCardComp from './CaseStudyCard';
import cardBanner from '../../../assets/images/card-image.png';
import logo from '../../../assets/svg/circle-logo-black.svg';
export default {
    title: 'Components/CaseStudyCard',
    component: CaseStudyCardComp,
} as ComponentMeta<typeof CaseStudyCardComp>;

const Template: ComponentStory<typeof CaseStudyCardComp> = (args) => (
    <CaseStudyCardComp {...args} />
);

export const CaseStudyCard = Template.bind({});
CaseStudyCard.args = {
    logoImage: logo,
    cardImage: cardBanner,
    details: 'Shipt scales its delivery ecosystem to meet growing demand with Slack',
};
