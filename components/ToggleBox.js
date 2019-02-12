import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ToggleBox extends Component {
  state = { checked: true };
  handleChanged = () => {
    const { isActive } = this.props;
    if (isActive === null) {
      this.setState(state => ({ checked: !state.checked }));
    }
    const { toggleHandler } = this.props;
    if (toggleHandler && typeof toggleHandler === 'function') {
      toggleHandler();
    }
  };
  render() {
    const { isActive } = this.props;
    const checked = isActive === null ? this.state.checked : isActive;
    return (
      <Div>
        <Label>
          <input type="checkbox" checked={checked} onChange={this.handleChanged} />
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
  toggleHandler: PropTypes.func,
  isActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

ToggleBox.defaultProps = {
  toggleHandler: () => {},
  isActive: null,
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
