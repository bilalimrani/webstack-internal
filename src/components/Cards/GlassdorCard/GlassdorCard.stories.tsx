import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlassdorCardComp from './GlassdorCard';
// import editIcon from '../../../assets/svg/edit-icon.svg';

export default {
  title: 'Components/Cards',
  component: GlassdorCardComp,
} as ComponentMeta<typeof GlassdorCardComp>;

const Template: ComponentStory<typeof GlassdorCardComp> = (args) => (
  <GlassdorCardComp {...args} />
);

export const Glassdor = Template.bind({});
Glassdor.args = {
  title: 'What employees are saying.',
  description:
    'Thanks to HubSpotters’ feedback and reviews over the years, we’ve been lucky to be named a great place to work globally.',
  rating: '4.9',
  recommendedText: '98% of employees on Glassdoor recommend Webstacks',
  editLinkText: 'Read our reviews',
  // editIcon: { editIcon },
};
