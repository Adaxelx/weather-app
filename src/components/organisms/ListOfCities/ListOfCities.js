import React from 'react';
import styled from 'styled-components';

/* eslint-disable no-undef */

const StyledCity = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledValues = styled.h3`
  text-transform: uppercase;
  margin-right: 5px;
`;

const ListOfCities = ({ message }) => {
  return (
    <StyledCity>
      {typeof message === 'string' ? (
        message
      ) : (
        <>
          <StyledValues as="h2">{message.name}</StyledValues>
          <StyledRow>
            <StyledValues>Temperature:</StyledValues>
            <StyledP>{message.temp}&#x2103;</StyledP>
          </StyledRow>
          <StyledRow>
            <StyledValues>Pressure:</StyledValues>
            <StyledP>{message.pressure}hPa</StyledP>
          </StyledRow>
          <StyledRow>
            <StyledValues>Wind Speed:</StyledValues>
            <StyledP>{message.wind}m/s</StyledP>
          </StyledRow>
          <StyledRow>
            <StyledValues>Description:</StyledValues>
            <StyledP>{message.description}</StyledP>
          </StyledRow>
        </>
      )}
    </StyledCity>
  );
};

export default ListOfCities;
