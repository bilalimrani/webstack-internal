import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';
import { COLOR } from '../../../styles/colors';

const CardWrapper = styled.div`
  max-width: 570px;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  background-color: ${props =>  props.theme.palette.primary.dark};
  @media ${device.mobileM} {
    max-width: 100%;
  }
`;
const CardInner = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid  ${props =>  props.theme.palette.divider};
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
    column-gap: 24px;
    @media ${device.mobileM} {
        flex-direction: column;
    }
`;
const BlogImage = styled.img`
    flex: 0 0 180px;
    max-width: 180px;
    @media ${device.mobileM} {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;
const DetailsWrapper = styled.div`
    flex: calc(100% - 180px);
    max-width: calc(100% - 180px);
    @media ${device.mobileM} {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;
const BlogHeading = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    color: ${props =>  props.theme.palette.text.primary};
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
`;
const BlogDescription = styled(BlogHeading)`
     font-weight: 400;
     line-height: 150%;
     margin-bottom: 0;
`;
const BlogPost = styled.div`
  font-weight: 600;
  line-height: 27px;
  color: ${COLOR.warning300};
  display: none;
  margin: 8px 0; 
  @media ${device.mobileM} {
    display: block;
  }
`;
const BlogUserWrapper = styled.div`
  display: none;
  @media ${device.mobileM} {
    display: block;
    margin-top: 20px;
  }
`;
const BlogUser = styled.div`
    display: none;
    column-gap: 1rem;
    justify-content: flex-start;
    display: none;
    @media ${device.mobileM} {
        display: flex;
    }
`;
const UserImage = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: none;
    @media ${device.mobileM} {
        display: block;
    }
`;
const UserTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    color: ${COLOR.gray900}
    display: none;
    @media ${device.mobileM} {
        display: block;
    }
`;
const UserDetails = styled.div`
    font-size: 14.44px;
    font-weight: 6400;
    line-height: 150%;
    color: ${COLOR.gray700}
    display: none;
    @media ${device.mobileM} {
        display: block;
    }
`;
export {
    CardWrapper,
    CardInner,
    BlogImage,
    DetailsWrapper,
    BlogHeading,
    BlogDescription,
    BlogPost,
    BlogUserWrapper,
    UserImage,
    BlogUser,
    UserTitle,
    UserDetails
};
