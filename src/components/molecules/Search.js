import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title';
import { Input } from 'components/atoms/Input';

/* eslint-disable no-undef */

const StyledSearch = styled.form`
  width: 95%;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (orientation: landscape) {
    width: 50%;
  }
`;

const StyledButton = styled.input`
  background-color: lightgray;
  height: 30px;
  width: 40px;
  border: 1px solid black;
`;

const Search = ({ setMessage }) => {
  const [search, setSeatch] = useState('');
  const onChange = e => {
    setSeatch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const FirstLetter = search.charAt(0).toUpperCase();
    const RestWord = search.slice(1).toLowerCase();
    const Word = FirstLetter + RestWord;
    const url = `http://api.openweathermap.org/data/2.5//weather?q=${Word}&APPID=7437862ea1728b60faa11402b4e72d11`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.cod !== '404') {
          setMessage({
            name: res.name,
            wind: res.wind.speed,
            temp: Math.round((res.main.temp - 273) * 100) / 100,
            pressure: res.main.pressure,
            description: res.weather[0].description,
          });
        } else {
          setMessage('Something gone bad. Check name of your city.');
        }
      });
  };
  return (
    <StyledSearch>
      <Title as="legend">Find your city:</Title>
      <Input value={search} onChange={onChange} />
      <StyledButton type="submit" onClick={onSubmit} value="Show" />
    </StyledSearch>
  );
};

export default Search;
