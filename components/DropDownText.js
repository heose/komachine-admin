import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DropDown from 'components/DropDown';
import InputText from 'components/form/InputText';

class DropDownText extends Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
  }
  state = { hasFocus: false };

  handleFocus = isFocus => this.setState(() => ({ hasFocus: isFocus }));
  render() {
    const { id, list, label, type, width } = this.props;
    const { hasFocus } = this.state;
    return (
      <Wrapper
        width={width}
        hasFocus={hasFocus}
        tabIndex="0"
        onFocus={() => this.handleFocus(true)}
        onBlur={() => this.handleFocus(false)}
      >
        <Div>
          <DropDown id={`${id}-combine-dd`} list={list} width="140px" isCombine />
          <Divider />
          <InputText id={`${id}-combine-it`} label={label} type={type} isCombine />
        </Div>
      </Wrapper>
    );
  }
}

DropDownText.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  type: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
};

DropDownText.defaultProps = {
  width: '100%',
  label: '',
  type: 'text',
};

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  display: inline-block;
  vertical-align: top;
  border: 1px solid lightgray;
  margin: -1px -1px 0 0;
  outline: none;
  ${props =>
    props.hasFocus &&
    css`
      border-color: black;
      z-index: 40;
    `};
`;

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Divider = styled.div`
  width: 1px;
  height: 90%;
  border: 0;
  margin-left: -5px;
  border-left: 1px solid red;
`;

export default DropDownText;
