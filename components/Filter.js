import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import get from 'lodash/get';
import shortid from 'shortid';
import Link from '~/components/Link';
import Checkbox from '~/components/Checkbox';

function Filter({ router, title, name, values = ['true', 'false'], labels = ['활성화', '비활성화'] }) {
  const omitMap = { [name]: get(router.query, name) };
  const options = [];
  values.forEach((value, idx) => {
    options.push(
      <Option key={shortid.generate()}>
        <Link href={`?${name}=${value}`} omitKeys={['page']} omitMap={omitMap} verifyHref={`?${name}=${value}`}>
          <Checkbox>{labels[idx]}</Checkbox>
        </Link>
      </Option>,
    );
  });
  return (
    <Div>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>{options}</Body>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  width: 120px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: #eeeeee;
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: #707070;
  margin-left: 15px;
`;

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 10px 0;
`;

const Option = styled.span`
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  font-size: 1.3rem;
`;

export default withRouter(Filter);
