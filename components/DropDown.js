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
      <Div width={width} isFocus={isFocus} onClick={this.handleFocus}>
        <Selected htmlFor={id}>
          <span>{selectedLabel}</span>
          <Icon>
            <FontAwesomeIcon icon="caret-down" fixedWidth />
          </Icon>
        </Selected>
        <Ul>{items}</Ul>
      </Div>
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

export const Selected = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  position: relative;
  background-color: #fff;
  border: 0.5px solid lightgray;
  width: 100%;
  & > span:first-child {
    padding-left: 10px;
  }
`;

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  right: 5px;
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
  width: 100%;
  background-color: #fff;
  border: 0.5px solid black;
  border-top: 0;
`;

export const Li = styled.li`
  cursor: pointer;
  display: block;
  padding: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const Div = styled.div`
  width: ${props => props.width};
  /* height: 45px; */
  margin: 0 1px 5px 0;
  position: relative;
  ${props =>
    props.isFocus &&
    css`
      ${Selected} {
        border: 0.5px solid black;
      }
      ${Icon} {
        transform: rotate(180deg);
      }
      ${Ul} {
        display: flex;
      }
    `};
`;

export default onClickOutside(DropDown);
