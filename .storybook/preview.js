import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';

import theme from '../src/styles/theme';

addDecorator((story) => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));