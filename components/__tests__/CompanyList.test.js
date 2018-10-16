import React from 'react';
import {mount, shallow} from 'enzyme';
import CompanyList from '../CompanyList';

describe('CompanyList component test', () => {
  it('renders without crashing', () => {
    const mockStore = {
      list: [],
      table: {},
      state: '',
      page: 1,
    };
    const wrapper = shallow(<CompanyList.wrappedComponent companyStore={mockStore}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
