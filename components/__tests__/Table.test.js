import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from '~/components/Table';

const headerData = [
  { key: 'header1', str: '헤더1', width: '20%', render: 'header1' },
  { key: 'header2', str: '헤더2', width: '30%', render: 'header2' },
  { key: 'header3', str: '헤더3', width: '30%', render: () => {} },
];

const data = [
  { header1: 1, header2: 2, header3: 3 },
  { header1: 'one', header2: 'two', header3: 'three' },
  { header1: '일', header2: '이', header3: '삼' },
];
describe('Table Component test', () => {
  it('correct', () => {
    const table = mount(<Table headerData={headerData} data={data} />);
    expect(toJson(table)).toMatchSnapshot();
  });
});
