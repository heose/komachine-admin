import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from 'components/Table';

const headerData = [
  { str: 'header1', width: '20%' },
  { str: 'header2', width: '30%' },
  { str: 'header3', width: '30%' },
];

const data = [
  { header1: 1, header2: 2, header3: 3 },
  { header1: 'one', header2: 'two', header3: 'three' },
  { header1: '일', header2: '이', header3: '삼' },
];
describe('Table Component test', () => {
  it('correct', () => {
    const table = mount(<Table headerData={headerData} data={data} />);
    // console.log(table.html());
    expect(toJson(table)).toMatchSnapshot();
  });
});
