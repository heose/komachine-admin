import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DropDown from 'components/DropDown';
import InputText, { Input } from 'components/form/InputText';

class DropDownText extends Component {
  state = {};
  render() {
    const { id, list, label, type, width } = this.props;
    return (
      <div>
        <DropDown id={`${id}-combine-dd`} list={list} />
        <InputText id={`${id}-combine-it`} label={label} type={type} width="60%" />
      </div>
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
  width: ${props => props.width};
`;

const Div = styled.div`
  display: inline-block;
  & + & {
    /* margin-left: 1px; */
  }
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  width: ${props => props.width};
  height: 45px;
`;

export default DropDownText;
