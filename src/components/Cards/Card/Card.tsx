import React, { FunctionComponent } from "react";
import {
    CardSubHeading,
    CardInner,
    CardTitle,
    CardWrapper
} from './Card.style';
import Button from "../../Button/Button";

interface CardProps {
    title: string;
    subHeading: string;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    const {title, subHeading} = props;
    return(
        <CardWrapper>
            <CardInner>
                <CardTitle>{title}</CardTitle>
                <CardSubHeading>{subHeading}</CardSubHeading>
                <Button label="Apply Now" size="large" />
            </CardInner>
        </CardWrapper>
    )
}
export default Card;