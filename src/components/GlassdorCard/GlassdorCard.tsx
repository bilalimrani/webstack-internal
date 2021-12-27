import React from "react";
import {BrowserRouter as Router, Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import editICon from '../../assets/svg/edit-icon.svg';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: #1D2939;
    width: 100%;
    padding: 40px;
    border: 1px solid #E4E7EC;
    box-sizing: border-box;
    border-radius: 4px;
`;
const CardInner = styled.div`
    max-width: 440px;
`;
const CardHeading = styled.h3`
    color: #ffffff;
    font-size: 28.13px;
    font-weight: 800;
    line-height: 150%;
    margin: 0 0 8px;
`;
const CardDetails = styled.p`
    color: #E4E7EC;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin: 0 0 1rem;
`;
const RatingsWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-weight: 600;
    font-size: 28.13px;
    line-height: 150%;
    color: #4DA74E;
    margin-bottom: 8px;
    span {
        display: flex;
        align-items: center;
        column-gap: 8px;
        color: #4DA74E;
        StarIcon {
            color: #4DA74E;
        }
    }
`;
const CardDetailsRecomended = styled(CardDetails)`
    color: #ffffff;
    font-weight: 600;
    margin: 0 0 8px;
`;
const EditLink = styled(Link)`
    color: #2885F6;
    font-weight: 600;
    margin: 0 0 0 0;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    column-gap: 11px;
`;
const GlassdorCard = () => {
    return(
        <CardWrapper>
            <CardInner>
                <CardHeading>What employees are saying.</CardHeading>
                <CardDetails>Thanks to HubSpotters’ feedback and reviews over the years, we’ve been lucky to be named a great place to work globally.</CardDetails>
                <RatingsWrapper>
                    4.9
                    <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </span>
                </RatingsWrapper>
                <CardDetailsRecomended className="employees">98% of employees on Glassdoor recommend Webstacks</CardDetailsRecomended>
                <Router>
                    <EditLink to="/">Read our reviews <img src={editICon} alt="edit-icon" /> </EditLink>
                </Router>
            </CardInner>
        </CardWrapper>
    )
}
export default GlassdorCard;