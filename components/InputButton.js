import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputWrapper from 'components/styled/InputWrapper';

export class InputButton extends Component {
  state = {};
  render() {
    const { children, width } = this.props;
    return (
      <Wrapper width={width}>
        <Button>{children}</Button>
      </Wrapper>
    );
  }
}

InputButton.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
};

InputButton.defaultProps = {
  width: '50px',
};

const Wrapper = styled(InputWrapper)``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  border: 0;
  cursor: pointer;
  color: gray;
`;

export default InputButton;
