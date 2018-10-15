import axios from 'axios';
import generateQueryStr from '../utils/query-string-generator';

class CompanyApi {
  constructor() {
    this.host = process.env.NODE_ENV === 'production' ? 'https://www.komachine.com' : 'http://localhost:8000';
  }

  fetchCompanies = query => {
    const queryStr = generateQueryStr(query);
    return axios.get(`${this.host}/ko/api/companies/${queryStr}`)
  }
}

export default CompanyApi;