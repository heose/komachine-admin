import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DropDown from 'components/DropDown';
import InputText from 'components/form/InputText';

class DropDownText extends Component {
  state = {};
  render() {
    const { id, list, label, type, width } = this.props;
    return (
      <Div width={width}>
        <DropDown id={`${id}-combine-dd`} list={list} width="40%" />
        <InputText id={`${id}-combine-it`} label={label} type={type} width="60%" />
      </Div>
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

const Div = styled.div`
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  width: ${props => props.width};
`;

export default DropDownText;
