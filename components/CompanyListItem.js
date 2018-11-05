import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const CompanyListItem = ({ id, title, logo, homepage, isActive, hasRelation, productCount }) => {
  console.log('asdf');
  console.log('aa');
  console.log('qq');
  return (
    <Div>
      id : {id}
      title: {title}
      logo: {logo}
      homepage: {homepage}
      isActive: {isActive}
      hasRelation: {hasRelation}
      productCount: {productCount}
    </Div>
  );
};

CompanyListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  isActive: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasRelation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  productCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
CompanyListItem.defaultProps = {
  id: '',
  isActive: '0',
  hasRelation: '0',
  productCount: 0,
};

export default CompanyListItem;
