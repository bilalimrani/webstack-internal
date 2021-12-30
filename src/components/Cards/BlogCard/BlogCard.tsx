import React, {FunctionComponent} from "react";
import {
    CardWrapper,
    CardInner,
    DetailsWrapper,
    BlogImage,
    BlogHeading,
    BlogDescription,
    BlogPost,
    BlogUserWrapper,
    BlogUser,
    UserImage,
    UserTitle,
    UserDetails
} from './BlogCard.style'
interface BlogCardProps {
    blogImage: any;
    heading: string;
    description: string;
    userTitle: string;
    userDetails: string;
    post: string,
    imageUser: any,
}
const BlogCard: FunctionComponent<BlogCardProps> = (props: BlogCardProps) => {
    const {blogImage, description, heading, post, imageUser, userTitle, userDetails} = props;
    return(
        <CardWrapper>
            <CardInner>
                <BlogImage src={blogImage} alt="blog image" />
                <DetailsWrapper>
                    <BlogPost>{post}</BlogPost>
                    <BlogHeading>{heading}</BlogHeading>
                    <BlogDescription>{description}</BlogDescription>
                </DetailsWrapper>
                <BlogUserWrapper>
                    <BlogUser>
                        <UserImage src={imageUser} alt="blog image"/>
                        <div>
                            <UserTitle>{userTitle}</UserTitle>
                            <UserDetails>{userDetails}</UserDetails>
                        </div>
                    </BlogUser>
                </BlogUserWrapper>
            </CardInner>
        </CardWrapper>
    )
}
export default BlogCard;