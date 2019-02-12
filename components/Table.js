import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

function TableComponent({ renderer, data, actions }) {
  const header = renderer.map(r => (
    <Th key={r.key} width={r.width}>
      <ThDiv>{typeof r.header === 'function' ? r.header(actions) : r.header}</ThDiv>
    </Th>
  ));
  const body = data.map((row, i) => {
    const cells = renderer.map(r => (
      <Cell key={r.key}>{typeof r.cell === 'function' ? r.cell(row, actions) : get(row, r.cell)}</Cell>
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
  renderer: PropTypes.arrayOf(
    PropTypes.shape({
      str: PropTypes.string,
      width: PropTypes.string,
      render: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({}),
};

TableComponent.defaultProps = {
  actions: {},
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

const HeaderRow = styled.tr`
  height: 3.7rem;
`;

const Th = styled.th`
  background-color: #9fabda;
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

const ThDiv = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.tbody`
  background-color: white;
`;

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
