import {action, observable, computed} from 'mobx';
import CompanyApi from '../apis/company-api';


export default class CompanyStore {
  @observable table = {};
  @observable list = [];
  @observable state = '';
  @observable page = 0;
  @observable isActive = null;
  @observable hasRelation = null;

  constructor(initialState, api) {
    const { companyStore } = initialState || {};
    this.api = api;
    if (companyStore) {
      this.table = companyStore.table;
      this.list = companyStore.list;
      this.state = companyStore.state;
      this.page = companyStore.page;
      this.isActive = companyStore.isActive;
      this.hasRelation = companyStore.hasRelation;
    }
  }

  @action
  setFilter({isActive = null, hasRelation = null}) {
    this.isActive = isActive;
    this.hasRelation = hasRelation;
  }

  @action
  async fetchCompanies(query) {
    this.state = 'pending';
    await this.api.fetchCompanies(query)
      .then(({data}) => this.fetchCompaniesSuccess(data))
      .catch(this.fetchCompaniesError)
  }

  @action.bound
  fetchCompaniesSuccess(data) {
    this.table = {...this.table, ...data.result.table};
    this.list = data.result.list;
    this.state = 'complete';
    this.page = data.result.page || 1;
    this.isActive = data.result.isActive || null;
    this.hasRelation = data.result.hasRelation || null;
  }

  @action.bound
  fetchCompaniesError(error) {
    this.state = 'error';
  }

  @computed
  get queryString() {
    const isActiveStr = this.isActive ? `&isActive=${this.isActive}` : '';
    const hasRelationStr = this.hasRelation ? `&hasRelation=${this.hasRelation}` : '';
    return `${isActiveStr}${hasRelationStr}`;
  }

}

export function initializeCompanyStore(initialState = {}) {
  return new CompanyStore(initialState, new CompanyApi());
}
