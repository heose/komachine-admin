import Api from './api';

class CompanyApi {
  fetchCompanies = ({ query, req }) => {
    const { headers } = req;
    return Api.get('ko/api/admin/companies', { params: query, headers });
    // const queryStr = generateQueryStr(query);
    // return axios.get(`${this.host}/ko/api/admin/companies`, {
    //   withCredentials: true,
    //   // headers: {
    //   //   // Cookie:
    //   //   //   'access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTQ4MzE5NDU0LCJqdGkiOiJkYmE5ZjI5YWUwNjg0YmIwOTZkODIxZjg1ODYzN2FlMCIsImVtYWlsIjoiaGVvc2VAa29tYWNoaW5lLmNvbSJ9.18tII7tpg-50M2UdbHDigAPbEKCng7Q_oE56smtmJnc',
    //   // },
    // });
  };
}

export default CompanyApi;
