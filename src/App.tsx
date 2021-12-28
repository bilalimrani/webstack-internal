import { useMemo, useState } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { ThemeModeContext } from './contexts';
import { Layout } from './components/Layout';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { getAppTheme } from './styles/theme';

const App = () => {
  const [mode, setMode] = useState<
    typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME
  >(DARK_MODE_THEME);

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) =>
          prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME,
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getAppTheme(mode)), [mode]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, theme: mode }}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default App;
