import Api, { setCookie } from './api';

class CompanyApi {
  fetchCompanies = ({ query, req }) => {
    const config = { params: query };
    setCookie(req, config);
    return Api.get('ko/api/admin/companies/', config);
  };

  update = data => Api.put(`ko/api/admin/companies/${data.id}/`, data);
}

export default CompanyApi;
