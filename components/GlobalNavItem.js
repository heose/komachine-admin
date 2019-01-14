import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function GlobalNavItem({ isActive, children, label }) {
  return (
    <Div isActive={isActive}>
      <Icon>{children}</Icon>
      <Span>{label}</Span>
    </Div>
  );
}

GlobalNavItem.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};

GlobalNavItem.defaultProps = {
  isActive: false,
  label: '',
};

const Div = styled.div`
  width: 140px;
  height: 90px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: #9fabda;
  cursor: pointer;
  &:after {
    position: absolute;
    width: 100%;
    height: 1px;
    content: '';
    border: 0;
    border-bottom: 5px solid #5c6bc0;
    bottom: 1px;
    left: 0;
    display: none;
  }
  &:hover {
    background-color: #3b3b53;
    color: white;
    &:after {
      display: block;
    }
  }
  ${props =>
    props.isActive &&
    css`
      background-color: #3b3b53;
      color: white;
      &:after {
        display: block;
      }
      & svg path {
        fill: #5c6bc0;
      }
    `};
`;

const Icon = styled.div`
  width: 40px;
  height: auto;
  display: flex;
  margin-top: 15px;
  justify-content: center;
  ${Div}:hover & svg path {
    fill: #5c6bc0;
  }
`;

const Span = styled.span`
  position: absolute;
  bottom: 0;
  display: block;
  font-size: 15px;
  margin-bottom: 15px;
`;

export default GlobalNavItem;
