import React from 'react';
import Router from 'next/router';
import withLayout from '../../lib/with-layout';
import InquirySVG from '../../lib/svg/inquiry.svg';
import DefaultLayout from '../../layouts/DefaultLayout';

class Inquiry extends React.Component {
  static async getInitialProps(props) {
    if (props.asPath === '/inquiry') {
      if (props.res) {
        props.res.writeHead(302, {
          Location: '/inquiry/komachine',
        });
        props.res.end();
      } else {
        Router.push('/inquiry/komachine');
      }
    }

    return {};
  }

  render() {
    return (
      <div>
        <h1>Inquiry</h1>
      </div>
    );
  }
}

const extraProps = {
  sideNavData: {
    active: true,
    parentPageName: '문의',
    icon: <InquirySVG />,
    items: [
      {
        label: '문의하기(코머신)',
        href: '/inquiry/komachine',
        needFullMatch: true,
      },
      {
        label: '기업 등록요청',
        href: '/inquiry/registration',
        needFullMatch: true,
      },
      {
        label: '기업 연동요청',
        href: '/inquiry/relation',
        needFullMatch: true,
      },
      {
        label: '문의하기(기업)',
        href: '/inquiry/company',
        needFullMatch: true,
      },
    ],
  },
};

export default withLayout(DefaultLayout, extraProps)(Inquiry);
