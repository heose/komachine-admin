import React from 'react';
import { shallow } from 'enzyme';
import Nav from 'components/SideNav';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultLayout, { Div, Central, Page } from '../DefaultLayout';

describe('defaultLayout test', () => {
  it('should have default area', () => {
    const layout = shallow(<DefaultLayout>default</DefaultLayout>);
    expect(layout.find(Div)).toHaveLength(1);
    expect(layout.find(Central)).toHaveLength(1);
    expect(layout.find(Page)).toHaveLength(1);
    expect(layout.find(Header)).toHaveLength(1);
    expect(layout.find(Nav)).toHaveLength(1);
    expect(layout.find(Footer)).toHaveLength(1);
  });
});
