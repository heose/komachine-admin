import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableComponent = ({ headerData, data }) => {
  const header = headerData.map(h => (
    <Cell key={h.key} width={h.width}>
      {h.str}
    </Cell>
  ));
  const body = data.map((row, i) => {
    const cells = headerData.map(h => (
      <Cell key={h.key}>{typeof h.render === 'function' ? h.render(row) : row[h.render]}</Cell>
    ));
    return <Row key={row.id || i}>{cells}</Row>;
  });
  return (
    <Table>
      <Header>
        <Row>{header}</Row>
      </Header>
      <Body>{body}</Body>
    </Table>
  );
};

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

const Table = styled.div`
  display: table;
  margin-bottom: 20px;
  width: 100%;
`;

const Header = styled.div`
  display: table-header-group;
  width: 100%;
  background-color: #e0e0e0;
  color: #7f7f7f;
  text-align: center;
  /* font-weight: bold; */
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
  text-align: ${({ align }) => align || 'center'};
  width: ${({ width }) => width};
`;

export default TableComponent;
