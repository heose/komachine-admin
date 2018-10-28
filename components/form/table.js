import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CompanyListItem from '../CompanyListItem';
import Logo from '../Logo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Table = styled.div`
  display: table;
  width: 750px;
  overflow: scroll;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: table-header-group;
  width: 100%;
  height: 30px;
  background-color: #e0e0e0;
  font-weight: bold;
  color: #7f7f7f;
  text-align: center;
`;

const Body = styled.div`
  display: table-row-group;
  background-color: white;
  & div {
    border-bottom: 1px solid gray;
    height: 40px;
    min-height: 40px;
    max-height: 40px;
    padding: 0 5px;
  }
`;

const Row = styled.div`
  display: table-row;
`;

const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: ${({align}) => align || 'center'};
  width: ${({width}) => width};
  color: ${({color}) => color || 'black'};
`;

const Footer = styled.div`
  display: table-footer-group;
`;

const CompanyListTable = ({table, list}) => {
  const listComponent = list.map(id => (
    <Row key={id}>
      <Cell>{table[id].title}</Cell>
      <Cell><Logo src={table[id].logo} height="30px" /></Cell>
      <Cell>
        <a href={table[id].homepage} target="_blank" style={{color: 'black'}}>
          <FontAwesomeIcon icon={'home'} fixedWidth />
        </a>
      </Cell>
      <Cell>{table[id].isActive}</Cell>
      <Cell>{table[id].hasRelation}</Cell>
      <Cell>{table[id].productsCount}</Cell>
      <Cell>{table[id].createdDate}</Cell>
    </Row>
  ));
  return (
    <Table>
      <Header>
        <Row>
          <Cell width="auto">기업명</Cell>
          <Cell width="15%">로고</Cell>
          <Cell width="10%">웹사이트</Cell>
          <Cell width="10%">기업활성화</Cell>
          <Cell width="10%">기업연동</Cell>
          <Cell width="10%">제품수</Cell>
          <Cell width="15%">등록일</Cell>
        </Row>
      </Header>
      <Body>
      {listComponent}
      </Body>
    </Table>
  );
};

export default CompanyListTable;

