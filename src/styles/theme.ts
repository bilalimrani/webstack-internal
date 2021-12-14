// import { createTheme } from '@mui/material/styles';

// let theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#2885F6',
//       dark: '#2740B0',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#3bc5ac',
//       main: '#E3F2FF',
//       dark: '#BCDDFF',
//       contrastText: '#fff',
//     },
//     tertiary: {
//       main: "#2E3D49",
//       contrastText: '#fff',
//     }
//   },
//   typography: {
//     fontFamily: "'Averta-Regular', sans-serif",
//     body1: { fontFamily: "'Averta-Regular', sans-serif" },
//     body2: { fontFamily: "'Averta-Regular', sans-serif" },
//     h1: { fontSize: '28.83px', fontFamily: "'Averta-Regular', sans-serif", },
//     h2: { fontSize: '25.63px', fontFamily: "'Averta-Regular', sans-serif", },
//     h3: { fontSize: '22.78px', fontFamily: "'Averta-Regular', sans-serif", },
//     h4: { fontSize: '20.25px', fontFamily: "'Averta-Regular', sans-serif", },
//     h5: { fontSize: '18px', fontFamily: "'Averta-Regular', sans-serif", },
//     h6: { fontSize: '14.44px', fontFamily: "'Averta-Regular', sans-serif", }
//   },
// });

// declare module "@mui/material/styles" {
//   interface PaletteColor {
//     lightest?: string;
//     lighter?: string;
//     darker?: string;
//   }

//   interface PaletteOptions {
//     tertiary: any;
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     tertiary: true;
//   }
// }

// export default theme;

import { createTheme, responsiveFontSizes, Theme } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';

import { DARK_MODE_THEME, LIGHT_MODE_THEME, DARK_MODE_COLOR, LIGHT_MODE_COLOR, LIGHT_MODE_COLOR_CONTRAST_TEXT } from '../utils/constants';

// export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME) => {
//   let theme = createTheme({
//     palette: {
//       mode,
//     },
//   });
//   theme = responsiveFontSizes(theme);
//   return theme;
// };

export const getAppTheme = (mode: any) => ({
  typography: {
    fontFamily: "'Averta-Regular', sans-serif",
    body1: { fontFamily: "'Averta-Regular', sans-serif" },
    body2: { fontFamily: "'Averta-Regular', sans-serif" },
    h1: { fontSize: '28.83px', fontFamily: "'Averta-Regular', sans-serif", },
    h2: { fontSize: '25.63px', fontFamily: "'Averta-Regular', sans-serif", },
    h3: { fontSize: '22.78px', fontFamily: "'Averta-Regular', sans-serif", },
    h4: { fontSize: '20.25px', fontFamily: "'Averta-Regular', sans-serif", },
    h5: { fontSize: '18px', fontFamily: "'Averta-Regular', sans-serif", },
    h6: { fontSize: '14.44px', fontFamily: "'Averta-Regular', sans-serif", }
  },
  palette: {

    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: LIGHT_MODE_COLOR,
          light: '#1D2939',
          dark: DARK_MODE_COLOR,
          contrastText: LIGHT_MODE_COLOR_CONTRAST_TEXT
        },

        secondary: {
          light: '#3bc5ac',
          main: '#E3F2FF',
          dark: '#BCDDFF',
          contrastText: '#fff',
        },
        tertiary: {
          main: "#2E3D49",
          contrastText: '#fff',
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: DARK_MODE_COLOR,
          light: DARK_MODE_COLOR,
          dark: DARK_MODE_COLOR,
          contrastText: DARK_MODE_COLOR
        },
        divider: '#344054',

        secondary: {
          light: '#3bc5ac',
          main: '#E3F2FF',
          dark: '#BCDDFF',
          contrastText: '#fff',
        },
        tertiary: {
          main: "#2E3D49",
          contrastText: '#fff',
        },
      }),

  },
});