import React from 'react';
import PropTypes from 'prop-types';

import styled, {css} from 'styled-components';
import theme from 'styled-theming';


const shape = theme('shape', {
  round: '50px',
  square: '0',
});

const size = theme('size', {
  small: '50px',
  medium: '100px',
  large: '150px',
});

export const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  line-height: 3.9rem;
  text-align: center;
  border: 1px solid #029688;
  background-color: white;
  color: #029688;
  width: ${size};
  height: 35px;
  border-radius: ${shape};
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

Button.propTypes = {
  theme: PropTypes.shape({
    shape: PropTypes.string,
    size: PropTypes.string,
  }),
};
Button.defaultProps = {
  theme: { shape: 'square', size: 'medium'},
};

export const SquareButton = styled(Button)`
  border-radius: 0;
`;
