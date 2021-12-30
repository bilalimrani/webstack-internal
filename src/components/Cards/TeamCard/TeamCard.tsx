import React, { FunctionComponent } from 'react';
import {CardWrapper, CardInner, Add,UserDetails, UserTitle, Designation, PlusIcon } from './TeamCard.style';
interface TeamCardProps {
    userLogo: any;
    title: string;
    designation: string;
}

const TeamCard:FunctionComponent<TeamCardProps> = (props: TeamCardProps) => {
    const {userLogo, title, designation} = props;
    return(
        <CardWrapper style={{backgroundImage: `url(${userLogo})`}}>
            <CardInner>
                <Add><PlusIcon></PlusIcon></Add>
                <UserDetails>
                    <UserTitle>{title}</UserTitle>
                    <Designation>{designation}</Designation>
                </UserDetails>
            </CardInner>
        </CardWrapper>
    )
}
export default TeamCard;