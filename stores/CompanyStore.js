import {action, observable} from 'mobx';

let store = null;

export default class CompanyStore {
  @observable companies = ['1', '2'];
  @observable title = 'companies';

  constructor(rootStore) {
    console.log(rootStore);
  }

}

export function initializeCompanyStore(isServer, rootStore) {
  if (isServer) {
    return new CompanyStore(isServer, rootStore);
  } else {
    if (store === null) {
      store = new CompanyStore(isServer, rootStore);
    }
    return store;
  }
}