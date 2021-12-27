import { styled, Box } from "@mui/material";
import Footer from "../Footer/Footer";
import { ThemeModeContext } from "../../contexts";

export const Layout = () => {
  return (
    <ThemeModeContext.Consumer>
      {(theme) => (
        <LayoutWrapper>
          <Box component="footer">
            <Footer theme={theme} />
          </Box>
        </LayoutWrapper>
      )}
    </ThemeModeContext.Consumer>
  );
};

const LayoutWrapper = styled("div")`
  min-height: 100vh;
`;
