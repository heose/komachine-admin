/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setViewType } from '../redux/modules/companies/reducers';

function CompanyViewType({ viewType, setViewType }) {
  return (
    <Div>
      <Label>보기 방식</Label>
      <Label>|</Label>
      <input type="radio" name="viewType" id="view-company" value="0" checked={viewType === 0} />
      <Label htmlFor="view-company">기업관리</Label>
      <input type="radio" name="viewType" id="view-img" value="1" checked={viewType === 1} />
      <Label htmlFor="view-img">대표이미지</Label>
      <input type="radio" name="viewType" id="view-product" value="2" checked={viewType === 2} />
      <Label htmlFor="view-product">제품관리</Label>
    </Div>
  );
}

CompanyViewType.propTypes = {
  viewType: PropTypes.number,
  setViewType: PropTypes.func.isRequired,
};

CompanyViewType.defaultProps = {
  viewType: 0,
};

const Div = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
  flex: 1 0 auto;
`;

const Label = styled.label`
  margin-right: 20px;
  user-select: none;
`;

const mapStateToProps = ({ companies }) => ({
  viewType: companies.viewType,
});

const mapDispatchToProps = { setViewType };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyViewType);
