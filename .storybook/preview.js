import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';

addDecorator((story) => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));