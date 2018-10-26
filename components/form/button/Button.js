import React from 'react';
import styled from 'styled-components';


export const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  line-height: 3.9rem;
  text-align: center;
  border: 1px solid #029688;
  background-color: white;
  color: #029688;
  width: 100px;
  height: 35px;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 5px 5px 0;
  &:hover {
    color: white;
    background-color: #029688;
  }
  ${({active}) => active && `
    color: white;
    background-color: #029688;
  `}
`;

export const SquareButton = styled(Button)`
  border-radius: 0;
`;
