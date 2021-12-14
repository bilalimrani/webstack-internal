import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme, { getAppTheme } from '../src/styles/theme';

addDecorator((story) => (
  <ThemeProvider theme={getAppTheme('light')}>{story()}</ThemeProvider>
));