import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title';
import { Input } from 'components/atoms/Input';

const StyledSearch = styled.form`
  width: 95%;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.input`
  background-color: lightgray;
  height: 30px;
  width: 30px;
`;

const Search = ({ setCity }) => {
  const [search, setSeatch] = useState('');
  const onChange = e => {
    setSeatch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const FirstLetter = search.charAt(0).toUpperCase();
    const RestWord = search.slice(1).toLowerCase();
    const Word = FirstLetter + RestWord;
    setCity(Word);
  };
  return (
    <StyledSearch>
      <Title as="legend">Find your city:</Title>
      <Input value={search} onChange={onChange} />
      <StyledButton type="submit" onClick={onSubmit} value="Go" />
    </StyledSearch>
  );
};

export default Search;
