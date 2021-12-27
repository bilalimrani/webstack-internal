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
          main: COLOR.white
        },
        
          divider: COLOR.secondary100,
          text: {
            primary: COLOR.secondary700,
            secondary: COLOR.secondary900,
          },
        }
      : {
        primary: {
          main: COLOR.secondary900
        },
        divider: COLOR.divider,
        background: {
          default: COLOR.secondary900,
          paper: COLOR.secondary900,
        },
        text: {
          primary: COLOR.white,
          secondary: COLOR.secondary200,
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
