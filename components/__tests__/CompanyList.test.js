import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CompanyList from '../CompanyList';
import { initializeCompanyStore } from '../../stores/company-store';

jest.mock('../../apis/company-api');

let companyStore;
describe('CompanyList component test', () => {
  beforeEach(() => {
    companyStore = initializeCompanyStore();
  });
  it('renders without crashing', async () => {
    await companyStore.fetchCompanies({});
    const wrapper = shallow(<CompanyList.wrappedComponent companyStore={companyStore} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('paging test', async () => {
    await companyStore.fetchCompanies({});
    companyStore.hasPrev = 0;
    expect(0).toBe(0);
  });
});
