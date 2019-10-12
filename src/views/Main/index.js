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
  const [message, setMessage] = useState('');
  const [isClicked, setClicked] = useState(false);
  return (
    <StyledMain>
      <Title main>Weather App</Title>
      <Search setMessage={setMessage} setClicked={setClicked} />
      <ListOfCities message={message} isClicked={isClicked} />
    </StyledMain>
  );
};

export default Main;
