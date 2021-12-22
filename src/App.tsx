import { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeModeContext } from './contexts';
import { Layout } from './components/Layout';
import { routes } from './config';
import { Route as AppRoute } from './types';
// import theme from './styles/theme';
import './App.scss';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { getAppTheme } from './styles/theme';


const App = () => {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME);
  const addRoute = (route: AppRoute) => (
    <Route key={route.key} />
  );

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getAppTheme(mode)), [mode]);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Layout>
              {routes.map((route: AppRoute) =>
                route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
              )}
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
