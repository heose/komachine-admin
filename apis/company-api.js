import Api from './api';

class CompanyApi {
  fetchCompanies = ({ query, req }) => {
    const { headers } = req;
    return Api.get('ko/api/admin/companies', { data: {}, params: query, headers });
  };
}

export default CompanyApi;
