import React from 'react';
import { Provider } from 'mobx-react';
import { shallow, mount } from 'enzyme';
import Renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import Link from 'components/Link';
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
    const wrapper = shallow(<CompanyList.wrappedComponent companyStore={companyStore} />);
    companyStore.hasPrev = true;
    expect(
      wrapper
        .find(Link)
        .first()
        .prop('enabled'),
    ).toBe('enabled');
    companyStore.hasPrev = false;
    expect(
      wrapper
        .find(Link)
        .first()
        .prop('enabled'),
    ).toBe('disabled');
    companyStore.hasNext = true;
    expect(
      wrapper
        .find(Link)
        .at(1)
        .prop('enabled'),
    ).toBe('enabled');
    companyStore.hasNext = false;
    expect(
      wrapper
        .find(Link)
        .first()
        .prop('enabled'),
    ).toBe('disabled');
  });

  it('correct inject company store', () => {
    const store = { companyStore };
    const wrapper = mount(
      <Provider store={store}>
        <CompanyList />
      </Provider>,
    );
    expect(wrapper.childAt(0).props()).toHaveProperty('companyStore');
  });
});
