import React from 'react';
import Router from 'next/router';
import withLayout from '~/lib/with-layout';
import InquirySVG from '~/lib/svg/inquiry.svg';
import DefaultLayout from '~/layouts/DefaultLayout';

class Inquiry extends React.Component {
  static async getInitialProps(props) {
    if (props.asPath === '/inquiry') {
      if (props.res) {
        props.res.writeHead(302, {
          Location: '/inquiry?about=komachine',
        });
        props.res.end();
      } else {
        Router.push('/inquiry?about=komachine');
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
        href: '?about=komachine',
      },
      {
        label: '기업 등록요청',
        href: '?about=registration',
      },
      {
        label: '기업 연동요청',
        href: '?about=relation',
      },
      {
        label: '문의하기(기업)',
        href: '?about=company',
      },
    ],
  },
};

export default withLayout(DefaultLayout, extraProps)(Inquiry);
