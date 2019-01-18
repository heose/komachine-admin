import React from 'react';
import Router from 'next/router';
import withLayout from '../../lib/with-layout';
import TranslationSVG from '../../lib/svg/translation.svg';
import DefaultLayout from '../../layouts/DefaultLayout';

class Translations extends React.Component {
  static async getInitialProps(props) {
    if (props.asPath === '/translations') {
      if (props.res) {
        props.res.writeHead(302, {
          Location: '/translations/en',
        });
        props.res.end();
      } else {
        Router.push('/translations/en');
      }
    }

    return {};
  }

  render() {
    return (
      <div>
        <h1>Translation</h1>
      </div>
    );
  }
}

const extraProps = {
  sideNavData: {
    active: true,
    parentPageName: '번역',
    icon: <TranslationSVG />,
    items: [
      {
        label: '영어',
        href: '/translations/en',
        needFullMatch: true,
      },
      {
        label: '중국어',
        href: '/translations/zh-hans',
        needFullMatch: true,
      },
      {
        label: '베트남어',
        href: '/translations/vi',
        needFullMatch: true,
      },
    ],
  },
};

export default withLayout(DefaultLayout, extraProps)(Translations);
