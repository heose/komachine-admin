import CompanyApi from '../company-api';
import {sizePerPage} from '../__mocks__/data/company-api-data';

jest.mock('../company-api');

describe('should fetch companies', () => {
  it('should be ok', async () => {
    const companyApi = new CompanyApi();
    await companyApi.fetchCompanies({}).then(({data}) => {
      expect(data.result.list.length).toEqual(sizePerPage);
    });
    await companyApi.fetchCompanies({}).then(({data}) => {
      expect(Object.keys(data.result).length).toEqual(5);
    });
    await companyApi.fetchCompanies({isActive: 1, hasRelation: 0}).then(({data}) => {
      expect(Object.keys(data.result).length).toEqual(7);
    });
  });
});