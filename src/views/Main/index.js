import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title';
import Search from 'components/molecules/Search';

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #3a73a9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => (
  <StyledMain>
    <Title main>Weather App</Title>
    <Search />
  </StyledMain>
);

export default Main;
