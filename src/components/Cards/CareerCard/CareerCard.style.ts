import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const CardWrapper = styled.div`
  max-width: 354px;
  min-height: 189px;
  background-color: ${COLOR.secondary50};
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
`;
const CardInner = styled.div`
  padding: 1rem;
  border: 1px solid ${COLOR.athensGray};
  border-radius: 4px;
`;
const CardTitle = styled.div`
  color: ${COLOR.primary600};
  font-family: 'Averta', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 8px;
`;
const CardHeading = styled.h4`
  color: ${COLOR.secondary900};
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  font-family: 'Averta', sans-serif;
  margin: 0 0 8px;
`;
const CardDetails = styled.p`
  color: ${COLOR.secondary700};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin: 0 0 16px;
  font-family: 'Averta', sans-serif;
`;
export {CardWrapper, CardInner, CardDetails, CardHeading, CardTitle};