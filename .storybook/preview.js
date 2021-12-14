import { addDecorator } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getAppTheme } from '../src/styles/theme';

addDecorator((story) => {
  const theme = createTheme(getAppTheme('light'))
  return (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  )
});