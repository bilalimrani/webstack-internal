import { Buttons } from '../Button/Button.stories';
import styled from 'styled-components';
const CardWrapper = styled.div`
  max-width: 354px;
  min-height: 189px;
  padding: 1rem;
  border: 1px solid #e4e7ec;
  box-sizing: border-box;
  border-radius: 4px;
`;
const CardTitle = styled.div`
  color: #2885f6;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 8px;
`;
const CardHeading = styled.h4`
  color: #101828;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin: 0 0 8px;
`;
const CardDetails = styled.p`
  color: #344054;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin: 0 0 16px;
`;
// const Button = styled(Buttons)`
//     background: #2885F6;
//     border-radius: 6px;
//     padding: 10px 18px;
//     font-weight: 900;
//     font-size: 16px;
//     line-height: 150%;
//     color: #ffffff;
//     border: 0;
// `;
const CareerCard = () => {
  return (
    <CardWrapper>
      <CardTitle>Account Executive - Mid Market</CardTitle>
      <CardHeading>Sales</CardHeading>
      <CardDetails>San Diego, CA</CardDetails>
      <Buttons label="Apply Now" size="small" />
    </CardWrapper>
  );
};

export default CareerCard;
