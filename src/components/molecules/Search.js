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
`;

const StyledButton = styled.input`
  background-color: lightgray;
  height: 30px;
  width: 30px;
`;

const Search = ({ setMessage, setClicked }) => {
  const [search, setSeatch] = useState('');
  const onChange = e => {
    setSeatch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setClicked(true);
    const FirstLetter = search.charAt(0).toUpperCase();
    const RestWord = search.slice(1).toLowerCase();
    const Word = FirstLetter + RestWord;
    const url = `http://api.openweathermap.org/data/2.5//weather?q=${Word}&APPID=7437862ea1728b60faa11402b4e72d11`;
    fetch(url)
      .then(res => {
        if (res.status !== 200) {
          setMessage('');
          throw Error();
        }
        return res.json();
      })
      .then(res => {
        setMessage({
          wind: res.wind.speed,
          temp: res.main.temp - 273,
          pressure: res.main.pressure,
          description: res.weather[0].description,
        });
      });
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
