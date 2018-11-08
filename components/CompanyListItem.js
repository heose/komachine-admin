import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/Logo';

const Row = styled.div`
  width: 750px;
  display: flex;
  height: 40px;
  background-color: white;
  max-height: 40px;
  border-bottom: 1px solid black;
`;

const CompanyListItem = ({ id, title, logo, homepage, isActive, hasRelation, productsCount, createdDate }) => {
  const localDate = moment(createdDate)
    .tz('Asia/Seoul')
    .format();
  return (
    <div>
      <Row id={id}>
        <Cell w="auto">{title}</Cell>
        <Cell w="15%">
          <Logo src={logo} height="30px" />
        </Cell>
        <Cell w="10%">
          <a href={homepage} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <FontAwesomeIcon icon="home" fixedWidth />
          </a>
        </Cell>
        <Cell w="10%">{isActive}</Cell>
        <Cell w="10%">{hasRelation}</Cell>
        <Cell w="10%">{productsCount}</Cell>
        <Cell w="15%">{localDate}</Cell>
      </Row>
    </div>
  );
};

CompanyListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  isActive: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasRelation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  productsCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  createdDate: PropTypes.string.isRequired,
};
CompanyListItem.defaultProps = {
  id: '',
  isActive: '0',
  hasRelation: '0',
  productsCount: 0,
};

const Header = styled(Row)`
  background-color: #e0e0e0;
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 ${({ w }) => w};
  ${({ w }) =>
    w === 'auto' &&
    `
    flex: 1 0 auto
  `};
`;

export default CompanyListItem;
