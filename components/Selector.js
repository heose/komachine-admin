import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import shortid from 'shortid';
import Checkbox from '~/components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Selector extends Component {
  state = { isActive: false };
  checkHandler = () => this.props.actions.selectAllRow();
  handleClick = () => this.setState(state => ({ isActive: !state.isActive }));
  render() {
    const { actions } = this.props;
    const actionButtons = actions.getActionMap().map(action => {
      const exec = () => {
        this.handleClick();
        action.exec();
      };
      return (
        <Action key={shortid.generate()} onClick={exec}>
          {action.label}
        </Action>
      );
    });
    return (
      <Div isHeader isActive={this.state.isActive}>
        <Checkbox isActive={actions.isAllSelected()} checkHandler={this.checkHandler} />
        <Icon onClick={this.handleClick}>
          <FontAwesomeIcon icon="caret-down" fixedWidth />
        </Icon>
        <ActionDiv isActive={this.state.isActive}>{actionButtons}</ActionDiv>
      </Div>
    );
  }
}

export const Div = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 40px;
  color: gray;
  cursor: pointer;
  height: 30px;
  border-radius: 10px;
  margin-left: 5px;
  padding-left: 5px;
  ${props =>
    props.isHeader &&
    css`
      transition: all 0.5s;
      &:hover {
        background-color: #43425d;
      }
      ${p =>
        p.isActive &&
        css`
          background-color: #43425d;
        `}
    `};
`;

const Icon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const ActionDiv = styled.div`
  position: absolute;
  z-index: 100;
  display: none;
  width: 128px;
  height: auto;
  left: 0;
  top: 100%;
  border-radius: 5px;
  background-color: white;
  color: gray;
  padding-bottom: 10px;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  ${props =>
    props.isActive &&
    css`
      display: block;
    `};
`;

const Action = styled.button`
  width: 100%;
  height: 32px;
  border: 0;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  padding-left: 5px;
  color: gray;
  &:hover {
    background-color: #d3d3d9;
  }
`;
