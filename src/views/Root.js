import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import Main from 'views/Main';

const StyledCenter = styled.div`
  display: flex;
  background-color: #3a73a9;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <StyledCenter>
      <GlobalStyle />
      <Main />
    </StyledCenter>
  </ThemeProvider>
);

export default Root;
