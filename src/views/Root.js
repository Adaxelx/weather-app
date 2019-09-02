import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import Main from 'views/Main';

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Main />
    </>
  </ThemeProvider>
);

export default Root;
