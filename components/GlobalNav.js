import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalNavItem from 'components/GlobalNavItem';
import CompanySVG from '../lib/svg/company.svg';
import CategorySVG from '../lib/svg/category.svg';
import SynonymSVG from '../lib/svg/synonym.svg';
import TranslationSVG from '../lib/svg/translation.svg';
import InquirySVG from '../lib/svg/inquiry.svg';

function GlobalNav(props) {
  return (
    <Div>
      <GlobalNavItem label="기업">
        <CompanySVG />
      </GlobalNavItem>
      <GlobalNavItem label="카테고리">
        <CategorySVG />
      </GlobalNavItem>
      <GlobalNavItem label="동의어">
        <SynonymSVG />
      </GlobalNavItem>
      <GlobalNavItem label="번역">
        <TranslationSVG />
      </GlobalNavItem>
      <GlobalNavItem label="문의">
        <InquirySVG />
      </GlobalNavItem>
    </Div>
  );
}

GlobalNav.propTypes = {};

const Div = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
`;

export default GlobalNav;
