import ClockStore from './ClockStore';
import { initializeCompanyStore } from './company-store';


let rootStore = null;

class RootStore {
  constructor(initialState) {
    this.clockStore = new ClockStore(initialState);
    this.companyStore = initializeCompanyStore(initialState);
  }
}

export function initializeStore(initialState) {
  if (initialState.isServer) {
    return new RootStore(initialState);
  } else {
    if (rootStore === null) {
      rootStore = new RootStore(initialState);
    }
    return rootStore;
  }
}