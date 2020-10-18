import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme(require('./theme.json'));

const AppTheme = (props) => {
  return (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
  );
}
export default AppTheme;
