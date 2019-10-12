import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title';
import Search from 'components/molecules/Search';
import ListOfCities from 'components/organisms/ListOfCities/ListOfCities';

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #3a73a9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  const [city, setCity] = useState('');
  return (
    <StyledMain>
      <Title main>Weather App</Title>
      <Search setCity={setCity} />
      <ListOfCities city={city} />
    </StyledMain>
  );
};

export default Main;
