import { initializeCompanyStore } from './company-store';

jest.mock('../apis/company-api');

const expected = {
  table: {},
  list: [],
  state: '',
  page: 0,
};

let companyStore;

describe('company store test', () => {
  beforeEach(() => {
    companyStore = initializeCompanyStore();
  });
  it('initialize', () => {
    expect(companyStore).toMatchObject(expected);
  });
  it('fetched', async () => {
    await companyStore.fetchCompanies({});
    expect(companyStore.list).toHaveLength(20);
  });
});