import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardWrapper = styled.div`
  max-width: 270px;
  width: 100%;
  background-color: ${props =>  props.theme.palette.primary.dark};
  border-radius: 8px;
  box-sizing: border-box;
  @media ${device.mobileM} {
    max-width: 100%;
  }
`;
const CardInner = styled.div`
  padding: 24px;
  width: 100%;
  @media ${device.mobileM} {
    padding: 1rem;  
  }
`;
const CardImage = styled.img`
   width: 100%;
   height: 100%;
`;
const LogoImage = styled.img`
   margin: 0 0 1rem;
`;
const CardDetails = styled.p`
  color: ${props =>  props.theme.palette.text.primary};
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin: 0 0 1rem;
  @media ${device.mobileM} {
    font-size: 14px;  
  }
`;
const LinkWrapper = styled.div`
    width: 100%;
    line-height: 1;
    text-align: right;
`;
const ArrowRight = styled(ArrowForwardIosIcon)`
   color: ${props =>  props.theme.palette.text.primary};  
`;
export {CardWrapper, CardInner, CardImage, LogoImage, LinkWrapper, ArrowRight, CardDetails};
