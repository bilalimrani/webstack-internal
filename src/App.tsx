import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
// import { AppContext } from './contexts';
import { AppClient } from './clients';
import { routes } from './config';
import { Route as AppRoute } from './types';
import theme from './styles/theme';

function App() {
  const appClient = new AppClient();

  const addRoute = (route: AppRoute) => (
    <Route key={route.key} />
  );

  return (
    // <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Layout>
          {routes.map((route: AppRoute) =>
            route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
          )}
        </Layout>
      </Switch>
    </Router>
    // </MuiThemeProvider>
  );
}

export default App;
