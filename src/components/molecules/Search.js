import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title';
import { Input } from 'components/atoms/Input';

const StyledSearch = styled.div`
  width: 80%;
  margin: 20px 0;
`;

const Search = () => (
  <StyledSearch>
    <Title>Find your city</Title>
    <Input />
  </StyledSearch>
);

export default Search;
