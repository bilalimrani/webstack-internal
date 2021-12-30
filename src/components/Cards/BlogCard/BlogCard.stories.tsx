import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlogCardComp from './BlogCard';
import blogImage from '../../../assets/images/card-image.png';
import userImage from '../../../assets/images/userImage.png';

export default {
    title: 'Components/BlogCard',
    component: BlogCardComp,
} as ComponentMeta<typeof BlogCardComp>;

const Template: ComponentStory<typeof BlogCardComp> = (args) => (
    <BlogCardComp {...args} />
);

export const BlogCard = Template.bind({});
BlogCard.args = {
    blogImage: blogImage,
    imageUser: userImage,
    heading: 'The Differences Between Headless CMS and Other Architectures, with Use Cases',
    description: 'We\'ve helped clients across multiple industries exceed their goals, launch world-class websites, optimize...',
    post: 'Project Management',
    userTitle: 'Eric Izazaga',
    userDetails: 'Marketing Coordinator'
};
