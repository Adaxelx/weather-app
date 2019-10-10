import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title';
import { Input } from 'components/atoms/Input';

const StyledSearch = styled.div`
  width: 95%;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: lightgray;
  height: 30px;
  width: 30px;
`;

const Search = () => (
  <StyledSearch>
    <Title>Find your city:</Title>
    <Input />
    <StyledButton>Go</StyledButton>
  </StyledSearch>
);

export default Search;
