import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '~/components/Link';

class PageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.perGroup = 20;
  }
  static getDerivedStateFromProps(props, state) {
    if (props.pageGroupIdx !== state.pageGroupIdx && !props.isFocus) {
      return {
        pageGroupIdx: props.pageGroupIdx,
      };
    }
    return null;
  }
  state = { pageGroupIdx: 0 };
  setPageGroupIdx = process => {
    const { page, pageCount } = this.props;
    const groupIdx = Math.ceil(page / this.perGroup) - 1 + this.state.pageGroupIdx;
    if (process === 'prev' && groupIdx > 0) {
      this.setState(state => ({ pageGroupIdx: state.pageGroupIdx - 1 }));
    } else if (process === 'next' && groupIdx * 20 + 20 < pageCount) {
      this.setState(state => ({ pageGroupIdx: state.pageGroupIdx + 1 }));
    }
  };

  render() {
    const { page, pageCount, isFocus, goToPage } = this.props;
    const groupIdx = Math.ceil(page / this.perGroup) - 1 + this.state.pageGroupIdx;
    let pageNum = groupIdx * 20;
    const pages = Array(20)
      .fill()
      .map(() => {
        pageNum += 1;
        return (
          <Link enabled={pageNum <= pageCount} key={pageNum} href={`?page=${pageNum}`}>
            <PageNumber onClick={goToPage}>{pageNum}</PageNumber>
          </Link>
        );
      });
    return (
      <Div isFocus={isFocus}>
        <NavButton enabled={groupIdx > 0} onClick={() => this.setPageGroupIdx('prev')}>
          <FontAwesomeIcon icon="angle-double-left" fixedWidth />
        </NavButton>
        <Pages>{pages}</Pages>
        <NavButton enabled={groupIdx * 20 + 20 < pageCount} onClick={() => this.setPageGroupIdx('next')}>
          <FontAwesomeIcon icon="angle-double-right" fixedWidth />
        </NavButton>
      </Div>
    );
  }
}

const Div = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #9fabda;
  display: none;
  width: auto;
  height: 80px;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  ${props =>
    props.isFocus &&
    css`
      display: flex;
    `}
`;

const NavButton = styled.button`
  border: 0;
  background-color: inherit;
  width: 30px;
  height: 30px;
  font-size: 2rem;
  color: #5666ae;
  padding: 0;
  cursor: pointer;
  outline: 0;
  ${props =>
    !props.enabled &&
    css`
      cursor: not-allowed;
    `}
`;

const Pages = styled.div`
  width: 330px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const PageNumber = styled.button`
  flex: 0 0 10%;
  width: 34px;
  height: 34px;
  border: 1px solid #9fabda;
  background-color: #3b3b53;
  color: white;
  cursor: pointer;
  margin: -1px -1px 0 0;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  ${props =>
    props.isActive &&
    css`
      background-color: #5c6bc0;
    `}
  ${props =>
    !props.enabled &&
    css`
      cursor: not-allowed;
    `}
`;

export default PageGroup;
