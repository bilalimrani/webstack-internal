import { createTheme } from '@material-ui/core/styles';

const fontRegular = "'Averta-Regular', sans-serif";

const customTheme = createTheme();

const theme = createTheme({

  palette: {
    primary: {
      light: '#757ce8',
      main: '#2885F6',
      dark: '#2740B0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#3bc5ac',
      main: '#E3F2FF',
      dark: '#BCDDFF',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: fontRegular,
    body1: { fontSize: '1.33em', },
    body2: { fontSize: '1.33em' },
    h1: { fontSize: '1.802em' },
    h2: { fontSize: '1.602em' },
    h3: { fontSize: '1.424em' },
    h4: { fontSize: '1.266em' },
    h5: { fontSize: '1.125em' },
    h6: { fontSize: '0.889em' },
    button: {
      textTransform: 'none'
    },
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: '#2740B0',
      },
    },
  }
});

export default theme;
