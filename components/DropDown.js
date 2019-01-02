import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
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
        <Selected htmlFor={id} isFocus={isFocus}>
          {selectedLabel}
          <Icon isFocus={isFocus}>
            <FontAwesomeIcon icon="caret-down" fixedWidth />
          </Icon>
        </Selected>
        <Ul isFocus={isFocus}>{items}</Ul>
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

const Div = styled.div`
  width: ${props => props.width};
  border: 0.5px solid lightgray;
  ${props => props.isFocus && `border: 0.5px solid black`};
`;

const Selected = styled.span`
  cursor: pointer;
  height: 40px;
  display: flex;
  padding-left: 10px;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  position: relative;
  ${props => props.isFocus && `border-bottom: 0.5px solid black`};
`;

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  right: 5px;
  font-size: 1.5rem;
  transition: all 0.2s;
  ${props => props.isFocus && `transform: rotate(180deg);`};
`;

const Ul = styled.ul`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  ${props => props.isFocus && `display: flex`};
`;

const Li = styled.li`
  cursor: pointer;
  display: block;
  padding: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export default onClickOutside(DropDown);
