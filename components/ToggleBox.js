import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ToggleBox extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <Div>
        <Label htmlFor="toggle-box">
          <input type="checkbox" id="toggle-box" />
          <Wrapper>
            <Button />
            <Span />
          </Wrapper>
        </Label>
      </Div>
    );
  }
}

ToggleBox.propTypes = {
  children: PropTypes.string,
};

ToggleBox.defaultProps = {
  children: '',
};

const Div = styled.div`
  user-select: none;
  input {
    display: none;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: inline-flex;
  width: 40px;
  height: 20px;
  position: relative;
`;

const Button = styled.i`
  border: 0;
  width: 20px;
  height: 100%;
  border-radius: 20px;
  background-color: #979797;
  margin-left: 0px;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  pointer-events: none;
  input:checked + div & {
    background-color: #009875;
    margin-left: 20px;
  }
  input:active + div & {
    width: 26px;
  }
  input:checked:active + div & {
    margin-left: 14px;
  }
`;

const Span = styled.span`
  width: 100%;
  height: 10px;
  background-color: #c5c5c5;
  position: absolute;
  z-index: 0;
  border-radius: 10px;
  margin: auto;
  top: 0;
  bottom: 0;
  input:checked + div & {
    background-color: #56d8c8;
  }
`;

export default ToggleBox;
