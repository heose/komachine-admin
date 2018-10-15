import {action, observable} from 'mobx';
import axios from 'axios';

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
    const dummyPage = query.page || 1;
    const dummyTable = {
      1: {
        1: {id: 1, slug: 'apple'},
        2: {id: 2, slug: 'samsung'},
        3: {id: 3, slug: 'lg'},
      },
      2: {
        4: {id: 4, slug: 'sony'},
        5: {id: 5, slug: 'hyundai'},
        6: {id: 6, slug: '오뚜기'},
      },
      3: {
        7: {id: 7, slug: '태양초'},
        8: {id: 8, slug: '프로젝트시디'},
        9: {id: 9, slug: '코덕'},
      }
    };
    const dummyList = {
      1: [1, 2, 3],
      2: [4, 5, 6],
      3: [7, 8, 9],
    }
    const dummyData = {
      data: {
        result: {
          table: dummyTable[dummyPage],
          list: dummyList[dummyPage],
        }
      }
    };
    this.fetchCompaniesSuccess(dummyData, query);
    // await axios
    //   .get(`http://localhost:8000/ko/api/companies/?page=${query.page || 1}`)
    //   .then(result => this.fetchCompaniesSuccess(result, query))
    //   .catch(this.fetchCompaniesError)
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
