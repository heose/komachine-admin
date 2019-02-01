import React from 'react';
import withLayout from '~/lib/with-layout';
import SynonymSVG from '~/lib/svg/synonym.svg';
import DefaultLayout from '~/layouts/DefaultLayout';

class Synonyms extends React.Component {
  static async getInitialProps(props) {
    return { path: props.asPath };
  }

  render() {
    return (
      <div>
        <h1>동의어 - {this.props.path}</h1>
      </div>
    );
  }
}

const extraProps = {
  sideNavData: {
    active: true,
    parentPageName: '동의어',
    icon: <SynonymSVG />,
    items: [
      {
        label: '전체 보기',
        href: '/synonyms',
        needFullMatch: true,
      },
      {
        label: '한글 보기',
        href: '/synonyms/ko',
      },
      {
        label: '알파벳 보기',
        href: '/synonyms/en',
      },
    ],
  },
};

export default withLayout(DefaultLayout, extraProps)(Synonyms);
