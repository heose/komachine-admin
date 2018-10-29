import { initializeCompanyStore } from '../company-store';
import {sizePerPage} from "../../apis/__mocks__/data/company-api-data";


jest.mock('../../apis/company-api');

const initialState = {
  companyStore: {
    table: {},
    list: [1, 2],
    state: '',
    page: '1',
    isActive: '0',
    hasRelation: '1',
  }
};

const tableExpected = {
  id: expect.any(Number),
  logo: expect.any(String),
  slug: expect.any(String),
  title: expect.any(String),
  homepage: expect.any(String),
  isActive: expect.any(Number),
  hasRelation: expect.any(Number),
  productsCount: expect.any(Number),
  createdDate: expect.any(String),
};

describe('company store test', () => {
  it('empty initialize', () => {
    const companyStore = initializeCompanyStore();
    expect(companyStore).toMatchObject({});
  });

  it('ssr initialize', () => {
    const companyStore = initializeCompanyStore(initialState);
    expect(companyStore.list).toContain(1);
    expect(companyStore.page).toBe('1');
    expect(companyStore.isActive).toBe('0');
  });

  it('fetched', async () => {
    const companyStore = initializeCompanyStore();
    await companyStore.fetchCompanies({}, false);
    expect(companyStore.list).toHaveLength(sizePerPage);
    expect(companyStore.table[Object.keys(companyStore.table)[0]])
      .toEqual(expect.objectContaining(tableExpected));
  });

  it('fail fecthing', async () => {
    const companyStore = initializeCompanyStore();
    await companyStore.fetchCompanies({throwError: true});
    expect(companyStore.state).toBe('error');
  });
});