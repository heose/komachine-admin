import Api from './api';

class CompanyApi {
  fetchCompanies = ({ query, req }) => {
    const { cookie } = req.headers || {};
    return Api.get('ko/api/admin/companies', { params: query, headers: { cookie } });
  };
}

export default CompanyApi;
