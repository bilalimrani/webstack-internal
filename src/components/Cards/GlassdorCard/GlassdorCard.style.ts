import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR } from '../../../styles/colors';

const CardWrapper = styled.div`
    background-color: ${COLOR.divider};
    width: 100%;
    padding: 40px;
    border: 1px solid ${COLOR.secondary200};
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
    font-family: 'Averta', sans-serif;
`;
const CardDetails = styled.p`
    color: ${COLOR.secondary200};
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin: 0 0 1rem;
    font-family: 'Averta', sans-serif;
`;
const RatingsWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-weight: 600;
    font-size: 28.13px;
    font-family: 'Averta', sans-serif;
    line-height: 150%;
    color: #4DA74E;
    margin-bottom: 8px;
    span {
        display: flex;
        align-items: center;
        column-gap: 8px;
        color: #4DA74E;
        font-family: 'Averta', sans-serif;
        StarIcon {
            color: #4DA74E;
        }
    }
`;
const CardDetailsRecommended = styled(CardDetails)`
    color: #ffffff;
    font-weight: 600;
    margin: 0 0 8px;
    font-family: 'Averta', sans-serif;
`;
const EditLink = styled(Link)`
    color: ${COLOR.neutral600};
    font-weight: 600;
    margin: 0 0 0 0;
    font-family: 'Averta', sans-serif;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    column-gap: 11px;
`;
export {CardWrapper, CardInner, CardDetails, CardHeading, CardDetailsRecommended, EditLink, RatingsWrapper}