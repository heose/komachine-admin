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
  width: 750px;
  border-collapse: collapse;
`;

const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: ${({ align }) => align || 'center'};
  width: ${({ width }) => width};
`;

const Row = styled.div`
  display: table-row;
`;

const Header = styled.div`
  display: table-header-group;
  width: 100%;
  background-color: #9fabda;
  color: white;
  text-align: center;
  height: 3.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  & ${Row} {
    height: 3.5rem;
  }
  & ${Cell}:first-child {
    border-top-left-radius: 5px;
  }
  & ${Cell}:last-child {
    border-top-right-radius: 5px;
  }
`;

const Body = styled.div`
  display: table-row-group;
  background-color: white;
  & > div > div {
    border-bottom: 1px solid gray;
  }
  & div {
    height: 40px;
    min-height: 40px;
    max-height: 40px;
    padding: 0 5px;
  }
`;

export default TableComponent;
