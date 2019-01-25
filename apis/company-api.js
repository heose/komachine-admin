import Api from './api';

class CompanyApi {
  fetchCompanies = ({ query, req }) => {
    const config = { params: query };
    if (req) {
      const { headers } = req || {};
      const { cookie } = headers || {};
      config.headers = { cookie };
    }
    return Api.get('ko/api/admin/companies', config);
  };
}

export default CompanyApi;
