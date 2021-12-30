import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR } from '../../../styles/colors';
import { device } from '../../../styles/breakpoints';

const CardWrapper = styled.div`
  @media ${device.mobileM} {
    padding: 1rem;
  }
    background-color: ${props =>  props.theme.palette.primary.dark};
    width: 100%;
    padding: 40px;
    border: 1px solid ${COLOR.secondary200};
    box-sizing: border-box;
    border-radius: 4px;
`;
const CardInner = styled.div`
    max-width: 440px;
    @media ${device.mobileM} {
        max-width: 100%;
    }
`;
const CardHeading = styled.h3`
    color:  ${props =>  props.theme.palette.text.primary};
    font-size: 28.13px;
    font-weight: 800;
    line-height: 150%;
    margin: 0 0 8px;
    @media ${device.mobileM} {
        font-size: 16px;
    }
`;
const CardDetails = styled.p`
    color: ${props =>  props.theme.palette.text.secondary};
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin: 0 0 1rem;
    @media ${device.mobileM} {
        font-size: 14px;
        margin: 0 0 8px;
    }
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
    @media ${device.mobileM} {
        font-size: 16px;
        span {
            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`;
const CardDetailsRecommended = styled(CardDetails)`
    color: ${props =>  props.theme.palette.text.primary};
    font-weight: 600;
    margin: 0 0 8px;
`;
const EditLink = styled(Link)`
    color: ${COLOR.neutral600};
    font-weight: 600;
    margin: 0 0 0 0;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    column-gap: 11px;
`;
export {CardWrapper, CardInner, CardDetails, CardHeading, CardDetailsRecommended, EditLink, RatingsWrapper}
