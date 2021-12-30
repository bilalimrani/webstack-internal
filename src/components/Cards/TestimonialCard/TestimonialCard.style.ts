import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

const CardWrapper = styled.div`
  max-width: 370px;
  width: 100%;
  background-color: ${props =>  props.theme.palette.primary.dark};
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  @media ${device.mobileM} {
    max-width: 100%;
  }
`;
const CardInner = styled.div`
  padding: 24px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid  ${props =>  props.theme.palette.divider};
  @media ${device.mobileM} {
    padding: 1rem;  
  }
`;
const Details = styled.p`
  color: ${props =>  props.theme.palette.text.primary};
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  margin: 0 0 1rem;
  @media ${device.mobileM} {
    font-size: 14px;  
  }
`;
const UserWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;
`;
const UserImage = styled.img`
   width: 56px;
   height: 56px;
   border-radius: 50%;
`;
const UserDetails = styled.div`
    width: 100%;
    line-height: 1;
`;
const UserName = styled.h4`
    margin: 0 0 8px;
    color: ${props =>  props.theme.palette.text.primary};
    font-size: 18px;
    line-height: 150%;
    font-size: 600;
    @media ${device.mobileM} {
        font-size: 14px;  
  }
`;
const UserDesignation = styled.p`
    margin: 0;
    color: ${props =>  props.theme.palette.text.primary};
    font-size: 14.44px;
    line-height: 18px;
    font-size: 400;
    @media ${device.mobileM} {
        font-size: 14px;  
  }
`;
export {CardWrapper, CardInner, UserWrapper, Details, UserImage, UserDetails, UserName, UserDesignation};
