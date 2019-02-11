import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'next/router';
import onClickOutside from 'react-onclickoutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '~/components/Link';
import PageGroup from '~/components/PageGroup';
import { recomposeQueryStr } from '~/utils/query-string';

class Paginator extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.page !== state.page && !state.isFocus) {
      return {
        page: props.page,
      };
    }
    return null;
  }
  state = {
    page: this.props.page || '1',
    pageGroupIdx: 0,
  };

  handleChange = e => {
    e.persist();
    this.setState(() => ({ page: e.target.value }));
  };
  handleClick = e => {
    this.setState(() => ({ isFocus: true }));
    e.target.setSelectionRange(0, e.target.value.length);
  };
  handleKeyUp = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.target.blur();
      const { router } = this.props;
      let query = `?page=${this.state.page || '1'}`;
      query = recomposeQueryStr(router.query, query);
      query = query.endsWith('?') ? '' : query;
      router.push(`${router.pathname}${query}`);
      setTimeout(() => this.setState(() => ({ isFocus: false })), 10);
    } else if (!/^[\d]+$/.test(e.target.value)) {
      this.setState(() => ({ page: 1 }));
    }
  };

  handleClickOutside = () => {
    this.setState(() => ({ isFocus: false, pageGroupIdx: 0 }));
  };

  goToPage = () => {
    this.setState(() => ({ isFocus: false, pageGroupIdx: 0 }));
  };

  render() {
    const { page, hasPrev, hasNext, pageCount } = this.props;
    return (
      <Div>
        <Link href="?page=1" enabled={page > 1}>
          <Button onClick={this.handleClickOutside}>
            <FontAwesomeIcon icon="angle-double-left" fixedWidth />
          </Button>
        </Link>
        <Link href={`?page=${page > 1 ? page - 1 : 1}`} enabled={hasPrev}>
          <Button onClick={this.handleClickOutside}>
            <FontAwesomeIcon icon="angle-left" fixedWidth />
          </Button>
        </Link>
        <Label>
          <span>Page</span>
          <Input
            type="text"
            value={this.state.page}
            onChange={this.handleChange}
            onClick={this.handleClick}
            onKeyUp={this.handleKeyUp}
          />
          <span>of</span>
          <PageCount>{pageCount}</PageCount>
          <PageGroup
            isFocus={this.state.isFocus}
            goToPage={this.goToPage}
            pageGroupIdx={this.state.pageGroupIdx}
            {...this.props}
          />
        </Label>
        <Link enabled={hasNext} href={`?page=${page < pageCount ? page + 1 : pageCount}`}>
          <Button onClick={this.handleClickOutside} paddingLeft="2px">
            <FontAwesomeIcon icon="angle-right" fixedWidth />
          </Button>
        </Link>
        <Link href={`?page=${pageCount}`} enabled={page < pageCount}>
          <Button onClick={this.handleClickOutside} paddingLeft="2px">
            <FontAwesomeIcon icon="angle-double-right" fixedWidth />
          </Button>
        </Link>
      </Div>
    );
  }
}

const Div = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 340px;
  height: 39px;
`;

const Button = styled.button`
  border: 2px solid #5666ae;
  border-radius: 100%;
  background-color: transparent;
  width: 32px;
  height: 32px;
  font-size: 2rem;
  color: #5666ae;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 0;
  padding-left: ${props => props.paddingLeft || 0};
  ${props =>
    !props.enabled &&
    css`
      cursor: not-allowed;
    `}
`;

const Label = styled.label`
  cursor: pointer;
  position: relative;
  width: 171px;
  height: 39px;
  border: 0;
  border-radius: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #9fabda;
  color: #e8eaf6;
  & span {
    font-size: 1.5rem;
    margin: 5px;
  }
`;

const PageCount = styled.span`
  color: black;
  margin-left: 0 !important;
`;

const Input = styled.input`
  text-align: right;
  cursor: pointer;
  outline: 0;
  outline-style: none;
  appearance: none;
  width: 30px;
  height: 10px;
  border: 1rem solid white;
  border-radius: 4px;
  font-size: 1.5rem;
`;

export default withRouter(onClickOutside(Paginator));
