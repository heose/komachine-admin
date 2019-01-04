import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import onClickOutside from 'react-onclickoutside';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.handleSelecte = this.handleSelecte.bind(this);
  }
  state = { isFocus: false, selectedIdx: 0 };
  handleFocus = () => {
    this.setState(({ isFocus }) => ({ isFocus: !isFocus }));
  };
  handleSelecte = idx => {
    this.setState(() => ({ selectedIdx: idx }));
  };
  handleClickOutside = () => {
    this.setState(() => ({ isFocus: false }));
  };
  render() {
    const { id, list, width } = this.props;
    const { isFocus, selectedIdx } = this.state;
    const selectedLabel = list[selectedIdx].label;
    const items = list.map(({ value, label }, idx) => (
      <Li key={value} onClick={() => this.handleSelecte(idx)}>
        {label}
      </Li>
    ));
    return (
      <Wrapper isFocus={isFocus} width={width} onClick={this.handleFocus}>
        <Label htmlFor={id}>{selectedLabel}</Label>
        <Symbol>
          <FontAwesomeIcon icon="caret-down" fixedWidth />
        </Symbol>
        <Ul>{items}</Ul>
      </Wrapper>
    );
  }
}

DropDown.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  width: PropTypes.string,
};

DropDown.defaultProps = {
  width: '100%',
};

export const Label = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0;
  height: 41.1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  position: relative;
  background-color: #fff;
  width: 100%;
  text-indent: 10px;
`;

const Symbol = styled.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 1.5rem;
  transition: all 0.2s;
`;

export const Ul = styled.ul`
  position: absolute;
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  left: -1px;
  width: 100%;

  background-color: #fff;
  border: 1px solid black;
`;

export const Li = styled.li`
  cursor: pointer;
  display: block;
  padding: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: -1px -1px 0 0;
  width: ${props => props.width};
  border: 1px solid lightgray;
  padding: 0;
  vertical-align: top;
  ${props =>
    props.isFocus &&
    css`
      border-color: black;
      z-index: 10;
      ${Symbol} {
        transform: translate(0, -50%) rotate(180deg);
      }
      ${Ul} {
        display: flex;
      }
    `};
`;

export default onClickOutside(DropDown);
