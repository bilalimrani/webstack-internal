import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';
import { device } from '../../../styles/breakpoints';

const CardWrapper = styled.div`
  max-width: 354px;
  min-height: 189px;
  background-color: ${props =>  props.theme.palette.primary.dark};
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  @media ${device.mobileM} {
    max-width: 100%;
  }
`;
const CardInner = styled.div`
  padding: 1rem;
  border: 1px solid  ${props =>  props.theme.palette.divider};
  border-radius: 4px;
`;
const CardTitle = styled.div`
  color: ${COLOR.primary600};
  font-family: 'Averta', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 8px;
  @media ${device.mobileM} {
    font-size: 14px;  
  }
`;
const CardHeading = styled.h4`
  color: ${props =>  props.theme.palette.text.primary};
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  font-family: 'Averta', sans-serif;
  margin: 0 0 8px;
  @media ${device.mobileM} {
    font-size: 14px;  
  }
`;
const CardDetails = styled.p`
  color: ${props =>  props.theme.palette.text.secondary};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin: 0 0 16px;
  font-family: 'Averta', sans-serif;
  @media ${device.mobileM} {
    font-size: 14px;  
  }
`;
export {CardWrapper, CardInner, CardDetails, CardHeading, CardTitle};
