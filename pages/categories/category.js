import React from 'react';
import Router from 'next/router';
import withLayout from '~/lib/with-layout';
import CategorySVG from '~/lib/svg/category.svg';
import DefaultLayout from '~/layouts/DefaultLayout';

class CategoriesByCategory extends React.Component {
  static async getInitialProps({ res }) {
    // if (res) {
    //   res.writeHead(302, {
    //     Location: '/companies',
    //   });
    //   res.end();
    // } else {
    //   Router.push('/companies');
    // }
    return {};
  }

  render() {
    return (
      <div>
        <h1>카테고리 방식</h1>
      </div>
    );
  }
}

const extraProps = {
  sideNavData: {
    active: true,
    parentPageName: '카테고리',
    icon: <CategorySVG />,
    items: [
      {
        label: '리스트 방식',
        href: '/categories',
        needFullMatch: true,
      },
      {
        label: '카테고리 방식',
        href: '/categories/category',
      },
    ],
  },
};

export default withLayout(DefaultLayout, extraProps)(CategoriesByCategory);
