import React from 'react';
import { Provider } from 'mobx-react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from 'components/Link';
import CompanyList from '../CompanyList';

jest.mock('../../apis/company-api');

let companyStore;
describe('CompanyList component test', () => {
  beforeEach(() => {
    // companyStore = initializeCompanyStore();
  });

  it('renders without crashing', async () => {
    await companyStore.fetchCompanies({});
    const wrapper = shallow(<CompanyList.wrappedComponent companyStore={companyStore} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('paging test', async () => {
  //   await companyStore.fetchCompanies({});
  //   companyStore.hasPrev = true;
  //   companyStore.hasNext = false;
  //   const wrapper = shallow(<CompanyList.wrappedComponent companyStore={companyStore} />);
  //   const PrevLink = wrapper.find(Link).first();
  //   const PrevNext = wrapper.find(Link).at(1);
  //   expect(PrevLink.prop('enabled')).toBe('enabled');
  //   expect(PrevNext.prop('enabled')).toBe('disabled');
  // });

  // it('correct inject company store', () => {
  //   const store = { companyStore };
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <CompanyList />
  //     </Provider>,
  //   );
  //   expect(wrapper.childAt(0).props()).toHaveProperty('companyStore');
  // });
});
