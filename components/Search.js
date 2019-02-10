import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { recomposeQueryStr } from '~/utils/query-string';

class Search extends React.Component {
  state = { keyword: this.props.router.query.search || '' };

  handleKeyUp = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const { router } = this.props;
      let query = `?search=${this.state.keyword}`;
      const omitKeys = this.state.keyword ? ['page'] : ['page', 'search'];
      query = recomposeQueryStr(router.query, query, omitKeys);
      query = query.endsWith('?') ? '' : query;
      router.push(`${router.pathname}${query}`);
    }
  };
  handleChange = e => {
    e.persist();
    this.setState(() => ({ keyword: e.target.value }));
  };
  render() {
    return (
      <Div>
        <Icon>
          <FontAwesomeIcon icon="search" fixedWidth />
        </Icon>
        <Input
          type="text"
          onKeyUp={this.handleKeyUp}
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="기업명"
        />
      </Div>
    );
  }
}

const Div = styled.div`
  display: inline-block;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  z-index: 10;
  width: 21px;
  height: 21px;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  left: 15px;
  top: 50%;
  color: #707070;
  transform: translateY(-50%);
`;

const Input = styled.input`
  border: 1.05rem solid white;
  border-top: 1.4rem solid white;
  border-left: 4.5rem solid white;
  /* border-right: 1rem solid white; */
  /* border-bottom: 0.5rem solid white; */
  font-size: 1.6rem;
  outline: 0;
  border-radius: 10px;
  outline-style: none;
  appearance: none;
  position: relative;
  color: #707070;
`;

export default withRouter(Search);
