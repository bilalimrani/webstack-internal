import { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeModeContext } from './contexts';
import { Layout } from './components/Layout';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { getAppTheme } from './styles/theme';
import './App.scss';

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default App;
