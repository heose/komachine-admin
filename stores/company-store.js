import { action, observable, computed } from 'mobx';
import CompanyApi from '../apis/company-api';

export default class CompanyStore {
  @observable
  table = {};
  @observable
  list = [];
  @observable
  state = '';
  @observable
  page = '1';
  @observable
  hasPrev = false;
  @observable
  hasNext = false;
  @observable
  isActive = null;
  @observable
  hasRelation = null;

  constructor(initialState, api) {
    const { companyStore } = initialState || {};
    this.api = api;
    if (companyStore) {
      this.table = companyStore.table;
      this.list = companyStore.list;
      this.state = companyStore.state;
      this.page = companyStore.page;
      this.hasPrev = companyStore.hasPrev;
      this.hasNext = companyStore.hasNext;
      this.isActive = companyStore.isActive;
      this.hasRelation = companyStore.hasRelation;
    }
  }

  @action
  async fetchCompanies(query) {
    this.state = 'pending';
    await this.api
      .fetchCompanies(query)
      .then(({ data }) => this.fetchCompaniesSuccess(data))
      .catch(this.fetchCompaniesError);
  }

  @action.bound
  fetchCompaniesSuccess(data) {
    this.table = { ...this.table, ...data.result.table };
    this.list = data.result.list;
    this.state = 'complete';
    this.page = data.result.page;
    this.hasPrev = data.result.hasPrev;
    this.hasNext = data.result.hasNext;
    this.isActive = data.result.isActive || null;
    this.hasRelation = data.result.hasRelation || null;
  }

  @action.bound
  fetchCompaniesError() {
    this.state = 'error';
  }

  @computed
  get queryMap() {
    const { isActive, hasRelation, page } = this;
    return { isActive, hasRelation, page };
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
