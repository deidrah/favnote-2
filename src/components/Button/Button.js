import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffd82b;
  width: ${({width}) => width || '500px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;

  ${({secondary}) => (
    secondary && css`
      background-color: #E6E6E6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `
  )}
`;

export default Button;