import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import CompanyList from '../components/CompanyList';
import { initializeStore } from './root-store';

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

describe('default test', () => {
  it('', () => {
    expect(2 + 2).toBe(4);
  });
  it('test2', () => {
    expect(2 + 2).toBe(4);
  });
});

it('renders without crashing', () => {
  const mockStore = {
    list: [],
    table: {},
    state: '',
    page: 1,
  };
  const wrapper = shallow(<CompanyList.wrappedComponent companyStore={mockStore} />);
  expect(wrapper).toMatchSnapshot();
});