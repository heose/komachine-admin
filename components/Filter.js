import React from 'react';
import Router, { withRouter } from 'next/router';
import styled from 'styled-components';
import isMatch from 'lodash/isMatch';
import Link from '~/components/Link';
import Checkbox from '~/components/Checkbox';

function Filter({ router, name, value = ['true', 'false'] }) {
  const omitMap = { company_active: router.query.company_active };
  return (
    <Div>
      <Header>
        <Title>기업활성화</Title>
      </Header>
      <Body>
        <Option>
          <Link href="?company_active=true" omitKeys={['page']} omitMap={omitMap} verifyHref="?company_active=true">
            <Checkbox id="filter-company-active">활성화</Checkbox>
          </Link>
        </Option>
        <Option>
          <Link href="?company_active=false" omitKeys={['page']} omitMap={omitMap} verifyHref="?company_active=false">
            <Checkbox id="filter-company-inactive">비활성화</Checkbox>
          </Link>
        </Option>
      </Body>
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
`;

export default withRouter(Filter);
