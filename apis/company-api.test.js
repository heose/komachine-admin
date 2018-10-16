import CompanyApi from './company-api';

jest.mock('./company-api');

describe('should fetch companies', () => {
  it('should be ok', async () => {
    const companyApi = new CompanyApi();
    await companyApi.fetchCompanies({}).then(({data}) =>{
      expect(data.result.list.length).toEqual(20);
    })
  });
});