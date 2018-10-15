import {action, observable} from 'mobx';
import axios from 'axios';
import generateQueryStr from '../utils/query-string-generator';

let companyStore = null;

export default class CompanyStore {
  @observable table = {};
  @observable list = [];
  @observable state = '';
  @observable page = 0;

  constructor(initialState) {
    const { companyStore } = initialState || {};
    console.log('Call CompanyStore constructor');
    if (companyStore) {
      console.log(companyStore.table);
      this.table = companyStore.table;
      this.list = companyStore.list;
      this.state = companyStore.state;
      this.page = companyStore.page;
    }
  }

  @action
  async fetchCompanies(query) {
    this.state = 'pending';
    const queryStr = generateQueryStr(query);
    await axios
      .get(`http://localhost:8000/ko/api/companies/${queryStr}`)
      .then(result => this.fetchCompaniesSuccess(result, query))
      .catch(this.fetchCompaniesError)
  }

  @action.bound
  fetchCompaniesSuccess({ data }, query) {
    this.table = {...this.table, ...data.result.table};

    this.list = data.result.list;
    this.state = 'complete';
    this.page = query.page || 1;
  }

  @action.bound
  fetchCompaniesError(error) {
    this.state = 'error';
    console.log(error);
  }
}

export function initializeCompanyStore(initialState) {
  console.log('initializeCompanyStore');
  if (initialState.isServer) {
    console.log('valid initialState');
    return new CompanyStore(initialState);
  } else {
    console.log('invalid initialState');
    if (companyStore === null) {
      console.log('But null companyStore, create new CompanyStore');
      companyStore = new CompanyStore(initialState);
    }
    console.log('return exist companyStore');
    console.log(initialState);
    return companyStore;
  }
}
