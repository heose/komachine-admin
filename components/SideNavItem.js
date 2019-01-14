import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideNavItem({ isActive, label, href }) {
  return (
    <Div isActive={isActive}>
      <Span>{label}</Span>
      <Icon>
        <FontAwesomeIcon icon="angle-right" fixedWidth />
      </Icon>
    </Div>
  );
}

SideNavItem.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

SideNavItem.defaultProps = {
  isActive: false,
};

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 0;
  border-top: 1px solid #f0f0f7;
  border-bottom: 1px solid #f0f0f7;
  margin-top: -1px;
  color: white;
  cursor: pointer;
  &:before {
    display: none;
    position: absolute;
    left: 0;
    content: '';
    height: 100%;
    border-left: 5px solid #5c6bc0;
    border-top: 1px solid #5c6bc0;
    border-bottom: 1px solid #5c6bc0;
  }
  &:hover {
    background-color: #f0f0f7;
    color: #5c6bc0;
    z-index: 10;
    &:before {
      display: block;
    }
  }
  ${props =>
    props.isActive &&
    css`
      background-color: #f0f0f7;
      color: #5c6bc0;
      z-index: 10;
      &:before {
        display: block;
      }
    `};
`;

const Span = styled.span`
  padding-left: 25px;
  font-size: 1.6rem;
  font-weight: bold;
  ${Div}:hover & {
    color: #3b3b53;
  }
`;

const Icon = styled.div`
  display: inline-block;
  position: absolute;
  right: 5px;
  font-size: 35px;
  line-height: 35px;
  display: flex;
  align-items: center;
`;

export default SideNavItem;
