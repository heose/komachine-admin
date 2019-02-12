import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

function TableComponent({ headerData, data }) {
  const header = headerData.map(h => (
    <Th key={h.key} width={h.width}>
      {h.str}
    </Th>
  ));
  const body = data.map((row, i) => {
    const cells = headerData.map(h => (
      <Cell key={h.key}>{typeof h.render === 'function' ? h.render(row) : get(row, h.render)}</Cell>
    ));
    return <Row key={row.id || i}>{cells}</Row>;
  });
  return (
    <Table>
      <Header>
        <HeaderRow>{header}</HeaderRow>
      </Header>
      <Body>{body}</Body>
    </Table>
  );
}

TableComponent.propTypes = {
  headerData: PropTypes.arrayOf(
    PropTypes.shape({
      str: PropTypes.string,
      width: PropTypes.string,
      render: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Table = styled.table`
  margin-bottom: 20px;
  width: 750px;
  border-collapse: separate;
  border-spacing: 0;
`;

const Header = styled.thead`
  width: 100%;
  color: white;
  text-align: center;
`;

const Th = styled.th`
  height: 3.7rem;
  background-color: #9fabda;
  vertical-align: middle;
  text-align: ${({ align }) => align || 'center'};
  width: ${({ width }) => width};
  font-weight: bold;
  font-size: 1.5rem;
  &:first-child {
    border-top-left-radius: 14px;
  }
  &:last-child {
    border-top-right-radius: 14px;
  }
`;

const Body = styled.tbody`
  background-color: white;
`;

const HeaderRow = styled.tr``;

const Row = styled.tr`
  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f0f0f7;
  }
`;

const Cell = styled.td`
  height: 6rem;
  border-bottom: 0.5px solid #d3d3d9;
  vertical-align: middle;
  text-align: ${({ align }) => align || 'center'};
  width: ${({ width }) => width};
  font-size: 1.5rem;
  &:first-child {
    border-left: 0.5px solid #d3d3d9;
  }
  &:last-child {
    border-right: 0.5px solid #d3d3d9;
  }
`;

export default TableComponent;
