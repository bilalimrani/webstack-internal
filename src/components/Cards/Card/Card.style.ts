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
const CardTitle = styled.h4`
  color: ${COLOR.secondary900};
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin: 0 0 8px;
  @media ${device.mobileM} {
    font-size: 14px;  
  }
`;
const CardSubHeading = styled.div`
  color: ${props =>  props.theme.palette.text.primary};
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  margin: 0 0 1rem;
  @media ${device.mobileM} {
    font-size: 14px;  
  }
`;
export {CardWrapper, CardInner, CardSubHeading, CardTitle};
