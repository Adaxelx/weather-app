import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: black;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  ${({ main }) =>
    main &&
    css`
      color: white;
      font-size: ${({ theme }) => theme.fontSize.xl};
      text-transform: uppercase;
      margin-top: 20px;
      margin-bottom: 0;
    `}
`;
