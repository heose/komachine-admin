import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CompanyViewType = props => (
  <Div>
    <Label>보기 방식</Label>
    <Label>|</Label>
    <input type="radio" name="viewType" id="view-company" value="0" />
    <Label htmlFor="view-company">기업관리</Label>
    <input type="radio" name="viewType" id="view-img" value="1" />
    <Label htmlFor="view-img">대표이미지</Label>
    <input type="radio" name="viewType" id="view-product" value="2" />
    <Label htmlFor="view-product">제품관리</Label>
  </Div>
);

CompanyViewType.propTypes = {};

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

export default CompanyViewType;
