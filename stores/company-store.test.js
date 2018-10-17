import { initializeCompanyStore } from './company-store';

jest.mock('../apis/company-api');

const initExpected = {
  table: {},
  list: [],
  state: '',
  page: 0,
  isActive: null,
  hasRelation: null,
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

let companyStore;

describe('company store test', () => {
  beforeEach(() => {
    companyStore = initializeCompanyStore();
  });
  it('initialize', () => {
    expect(companyStore).toMatchObject(initExpected);
  });
  it('fetched', async () => {
    await companyStore.fetchCompanies({});
    expect(companyStore.list).toHaveLength(20);
    expect(companyStore.table[Object.keys(companyStore.table)[0]])
      .toEqual(expect.objectContaining(tableExpected));
  });
});