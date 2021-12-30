import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    CardDetails,
    CardInner,
    CardWrapper,
    CardImage,
    LogoImage,
    LinkWrapper,
    ArrowRight
} from './CaseStudyCard.style';

interface CaseStudyCardProps {
    details: string;
    cardImage: any;
    logoImage: any;
}

const CaseStudyCard: FunctionComponent<CaseStudyCardProps> = (props: CaseStudyCardProps) => {
    const {details, logoImage, cardImage} = props;
    return(
        <CardWrapper>
            <CardImage src={cardImage} alt='card image' />
            <CardInner>
                <LogoImage src={logoImage} alt='logo' />
                <CardDetails>{details}</CardDetails>
                <LinkWrapper>
                    <Router><Link to="/"><ArrowRight /></Link></Router>
                </LinkWrapper>
            </CardInner>
        </CardWrapper>
    )
}
export default CaseStudyCard;