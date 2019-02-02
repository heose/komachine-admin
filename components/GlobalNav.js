import React from 'react';
import styled from 'styled-components';
import Link from '~/components/Link';
import GlobalNavItem from '~/components/GlobalNavItem';
import CompanySVG from '../lib/svg/company.svg';
import CategorySVG from '../lib/svg/category.svg';
import SynonymSVG from '../lib/svg/synonym.svg';
import TranslationSVG from '../lib/svg/translation.svg';
import InquirySVG from '../lib/svg/inquiry.svg';

function GlobalNav() {
  const menus = [
    { href: '/companies', label: '기업', icon: <CompanySVG /> },
    { href: '/categories', label: '카테고리', icon: <CategorySVG /> },
    { href: '/synonyms', label: '동의어', icon: <SynonymSVG /> },
    { href: '/translations', label: '번역', icon: <TranslationSVG /> },
    { href: '/inquiry', label: '문의', icon: <InquirySVG /> },
  ].map(item => (
    <Link key={item.label} href={item.href}>
      <GlobalNavItem label={item.label}>{item.icon}</GlobalNavItem>
    </Link>
  ));

  return <Div>{menus}</Div>;
}

GlobalNav.propTypes = {};

const Div = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
`;

export default GlobalNav;
