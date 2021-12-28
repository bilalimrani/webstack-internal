import { LIGHT_MODE_THEME } from '../utils/constants';
import { COLOR } from './colors';
import typography from './typography.theme';


export const getAppTheme = (mode: any) => ({
  typography: typography,
  palette: {
    mode,
    ...(mode === LIGHT_MODE_THEME
      ? {
        primary: {
          main: COLOR.white,
          dark: COLOR.secondary50
        },
        
          divider: COLOR.secondary200,
          text: {
            primary: COLOR.secondary900,
            secondary: COLOR.secondary700,
          },
        }
      : {
        primary: {
          main: COLOR.gray900,
          dark: COLOR.gray800
        },
        divider: COLOR.gray700,
        background: {
          default: COLOR.gray900,
          paper: COLOR.gray900,
        },
        text: {
          primary: COLOR.white,
          secondary: COLOR.secondary300,
        },
      }),
  },
});


declare module "@mui/material/styles" {
  interface PaletteOptions {
    tertiary?: any;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary?: true;
  }
}
