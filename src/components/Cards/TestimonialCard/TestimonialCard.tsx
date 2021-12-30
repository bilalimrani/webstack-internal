import React, { FunctionComponent } from 'react';
import {CardWrapper, CardInner, UserWrapper, Details, UserImage, UserDetails, UserName, UserDesignation} from './TestimonialCard.style';

interface TestimonialCardProps {
    details: string;
    userLogo: any;
    userName: string;
    userDesignation: string;
}

const TestimonialCard: FunctionComponent<TestimonialCardProps> = (props: TestimonialCardProps) => {
    const {userLogo, details, userName, userDesignation} = props;
    return(
        <CardWrapper>
            <CardInner>
                <Details>{details}</Details>
                <UserWrapper>
                    <UserImage src={userLogo} alt="user logo"></UserImage>
                    <UserDetails>
                        <UserName>{userName}</UserName>
                        <UserDesignation>{userDesignation}</UserDesignation>
                    </UserDetails>
                </UserWrapper>
            </CardInner>
        </CardWrapper>
    )
}
export default TestimonialCard;