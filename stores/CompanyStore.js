import {action, observable} from 'mobx';
import axios from 'axios';

let companyStore = null;

export default class CompanyStore {
  @observable companies = [];
  @observable state = '';

  constructor(initialState, rootStore) {
    if (initialState) {
      const { companyStore } = initialState;
      console.log('CompanyStore constructor', initialState);
      // this.companies = companyStore.companies;
      // this.state = companyStore.state;
    }
  }

  @action
  async fetchCompanies({ page=1 }) {
    console.log('fetching');
    console.log('page', page);
    this.state = 'pending';
    await axios
      .get('http://localhost:8000/en/api/companies/')
      .then(this.fetchCompaniesSuccess)
      .catch(this.fetchCompaniesError)
  }

  @action.bound
  fetchCompaniesSuccess({ data }) {
    this.companies = data.result;
    this.state = 'complete';
    console.log('complete');
  }

  @action.bound
  fetchCompaniesError(error) {
    this.state = 'error';
    console.log(error);
  }
}

export function initializeCompanyStore(initialState) {
  if (initialState) {
    return new CompanyStore(initialState);
  } else {
    if (companyStore === null) {
      companyStore = new CompanyStore(initialState);
    }
    return companyStore;
  }
}