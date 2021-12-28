import React, {FunctionComponent} from "react";
import {BrowserRouter as Router } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import {CardWrapper, CardInner, CardHeading, CardDetails, RatingsWrapper, EditLink, CardDetailsRecommended} from './GlassdorCard.style';
interface GlassdorCardProps {
    title: string,
    description: string;
    rating: string;
    recommendedText: string;
    editLinkText: string;
    editIcon?: any;
}

const GlassdorCard: FunctionComponent<GlassdorCardProps> = (props: GlassdorCardProps) => {
    const {title, description, rating, recommendedText, editLinkText, editIcon} = props;
    return(
        <CardWrapper>
            <CardInner>
                <CardHeading>{title}</CardHeading>
                <CardDetails>{description}</CardDetails>
                <RatingsWrapper>
                    {rating}
                    <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </span>
                </RatingsWrapper>
                <CardDetailsRecommended className="employees">{recommendedText}</CardDetailsRecommended>
                <Router>
                    <EditLink to="/">{editLinkText} <img src={editIcon} alt="edit-icon" /> </EditLink>
                </Router>
            </CardInner>
        </CardWrapper>
    )
}
export default GlassdorCard;