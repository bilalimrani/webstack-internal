import { styled, Box } from '@mui/material';
import Footer from '../Footer/Footer';
import { ThemeModeContext } from '../../contexts';
import GlassdorCard from '../Cards/GlassdorCard/GlassdorCard';

export const Layout = () => {
  return (
    <ThemeModeContext.Consumer>
      {(theme) => (
        <LayoutWrapper>
          <GlassdorCard
            title="Account Executive - Mid-Market"
            // heading="Sales  "
            // details="San Diego, CA"
          />
          <Box component="footer">
            <Footer theme={theme} />
          </Box>
        </LayoutWrapper>
      )}
    </ThemeModeContext.Consumer>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`;
