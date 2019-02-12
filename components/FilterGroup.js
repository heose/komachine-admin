import React from 'react';
import styled, { css } from 'styled-components';
import shortid from 'shortid';
import Filter from '~/components/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FilterGroup extends React.Component {
  state = {
    isActive: false,
  };
  handleClick = () => this.setState(state => ({ isActive: !state.isActive }));
  render() {
    const { filters } = this.props;
    const filterItems = filters.map(filter => <Filter key={shortid.generate()} {...filter} />);
    return (
      <Div>
        <Button onClick={this.handleClick}>
          <FontAwesomeIcon icon="filter" fixedWidth />
        </Button>
        <Wrapper isActive={this.state.isActive}>{filterItems}</Wrapper>
      </Div>
    );
  }
}

const Div = styled.div`
  display: inline-block;
  margin-top: 4px;
  position: relative;
  width: 120px;
`;

const Button = styled.button`
  border: 1px solid #d3d3d9;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 16%);
`;

const Wrapper = styled.div`
  background-color: white;
  top: calc(100% + 23px);
  left: 0;
  z-index: 100;
  position: absolute;
  border: 0.5px solid #707070;
  display: none;
  padding-top: 4px;
  ${props =>
    props.isActive &&
    css`
      display: block;
    `}
`;

export default FilterGroup;
