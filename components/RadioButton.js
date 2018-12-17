import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function RadioButton({ id, name, children }) {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        <input type="radio" id={id} name={name} />
        <Svg width="20px" height="20px" viewBox="0 0 20 20">
          <Circle cx="10" cy="10" r="9" />
          <Inner d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" />
          <Outer d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" />
        </Svg>
        <Span>{children}</Span>
      </Label>
    </Wrapper>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string,
};

RadioButton.defaultProps = {
  children: '',
};

const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  input {
    display: none;
  }
  & + & {
    margin-left: 12px;
  }
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Svg = styled.svg`
  fill: none;
`;

const Circle = styled.circle`
  stroke-width: 2;
  stroke: #c8ccd4;
`;

const Inner = styled.path`
  stroke: #008fff;
  stroke-width: 6;
  stroke-dasharray: 19;
  stroke-dashoffset: 19;
  input:checked + svg & {
    transition: all 0.4s ease;
    stroke-dashoffset: 38;
  }
`;

const Outer = styled.path`
  stroke: #0a87ff;
  stroke-width: 2;
  stroke-dasharray: 57;
  stroke-dashoffset: 57;
  transition: all 0.4s ease;
  input:checked + svg &,
  label:hover & {
    stroke-dashoffset: 0;
  }
`;

const Span = styled.span`
  margin-left: 2px;
  margin-top: 5px;
`;

export default RadioButton;
