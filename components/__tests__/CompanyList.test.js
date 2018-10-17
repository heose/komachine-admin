import React from 'react';
import {mount, shallow} from 'enzyme';
import CompanyList from '../CompanyList';
import {fetchedCompaniesData} from '../../apis/__mocks__/data/company-api-data';

describe('CompanyList component test', () => {
  it('renders without crashing', () => {
    const { result: mockStore } = fetchedCompaniesData;
    const wrapper = shallow(<CompanyList.wrappedComponent companyStore={mockStore}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
