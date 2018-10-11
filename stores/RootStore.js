import ClockStore from './ClockStore';
import CompanyStore, {initializeCompanyStore} from './CompanyStore';


let rootStore = null;


class RootStore {
  constructor(initialState) {
    this.clockStore = new ClockStore(initialState);
    // this.companyStore = initializeCompanyStore(initialState);
    this.companyStore = new CompanyStore(initialState, this);
  }
}

export function initializeStore(initialState) {
  console.log('rootStore', initialState);
  if (initialState) {
    return new RootStore(initialState);
  } else {
    console.log('rootStore', rootStore);
    if (rootStore === null) {
      rootStore = new RootStore(initialState);
    }
    return rootStore;
  }
}