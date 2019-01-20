import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ToggleBox extends Component {
  state = {};
  handleChanged = () => {
    const { id, toggleHandler } = this.props;
    if (toggleHandler && typeof toggleHandler === 'function') {
      toggleHandler(id);
    }
  };
  render() {
    const { id, isActive } = this.props;
    return (
      <Div>
        <Label htmlFor={`company-isactive-toggle-${id}`}>
          <input
            type="checkbox"
            id={`company-isactive-toggle-${id}`}
            checked={isActive}
            onChange={this.handleChanged}
          />
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
  id: PropTypes.number.isRequired,
  toggleHandler: PropTypes.func,
  isActive: PropTypes.oneOf('1', '0'),
};

ToggleBox.defaultProps = {
  toggleHandler: null,
  isActive: '0',
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
