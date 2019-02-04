import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Link from '~/components/Link';
import { recomposeQueryStr } from '~/lib/with-link';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  state = { keyword: '' };
  handleKeyUp = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const { router } = this.props;
      console.log(router);
      console.log(this.input.current.value);
      const href = `?search=${this.input.current.value}`;
      const omitKeys = this.input.current.value ? ['page'] : ['page', 'search'];
      const query = recomposeQueryStr(router.query, href, omitKeys);

      router.push(`${router.pathname}${query}`);
    } else {
      this.setState(() => ({ keyword: this.input.current.value }));
    }
  };
  render() {
    return (
      <Div>
        <Input type="text" ref={this.input} onKeyUp={this.handleKeyUp} />
        <Link href={`?search=${this.state.keyword}`}>검색</Link>
      </Div>
    );
  }
}

const Div = styled.div`
  display: inline-block;
`;

const Input = styled.input``;

export default withRouter(Search);
