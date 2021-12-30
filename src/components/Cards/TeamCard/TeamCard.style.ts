import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';
import { device } from '../../../styles/breakpoints';
import AddIcon from '@mui/icons-material/Add';

const CardWrapper = styled.div`
  max-width: 370px;
  width: 100%;
  min-height: 256px;
  border-radius: 8px;
  padding: 24px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  &:before {
    content: '';
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 46.36%, rgba(0, 0, 0, 0.54) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0 0 8px 8px;
  }
  @media ${device.mobileM} {
    max-width: 100%;
  }
`;
const CardInner = styled.div`
    position: absolute;
    bottom: 24px;
    width: calc(100% - 48px);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Add = styled.div`
    background-color: ${COLOR.primary600};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    AddIcon {
        color: #fff;
    }
`;
const PlusIcon = styled(AddIcon)`
    color: #fff;
    font-weight: 900;
`;
const UserDetails = styled.div`
    position: relative;
`;
const UserTitle = styled.h4`
    margin: 0 0 4px;
    color: ${props =>  props.theme.palette.text.primary};
    font-size: 18px;
    line-height: 150%;
    font-weight: 600;
    @media ${device.mobileM} {
        font-size: 14px;  
  }
`;
const Designation = styled.p`
    margin: 0;
    color: ${props =>  props.theme.palette.text.primary};
    font-size: 18px;
    line-height: 150%;
    font-size: 400;
    @media ${device.mobileM} {
        font-size: 14px;  
  }
`;
export {CardWrapper, CardInner, Add, PlusIcon, UserDetails, UserTitle, Designation};
