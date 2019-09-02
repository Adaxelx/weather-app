import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title';
import Search from 'components/molecules/Search';
import ListOfCities from 'components/organisms/ListOfCities/ListOfCities';

const StyledMain = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  const [message, setMessage] = useState('');
  return (
    <StyledMain>
      <Title main>Weather App</Title>
      <Search setMessage={setMessage} />
      <ListOfCities message={message} />
    </StyledMain>
  );
};

export default Main;
