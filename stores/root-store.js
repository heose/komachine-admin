import ClockStore from './ClockStore';
import { initializeCompanyStore } from './company-store';


let rootStore = null;

class RootStore {
  constructor(initialState) {
    console.log('Call RootStore constructor');
    this.clockStore = new ClockStore(initialState);
    this.companyStore = initializeCompanyStore(initialState);
  }
}

export function initializeStore(initialState) {
  console.log('initializeStore');
  if (initialState.isServer) {
    console.log('valid initialState');
    return new RootStore(initialState);
  } else {
    console.log('invalid initialState');
    if (rootStore === null) {
      console.log('But null rootStore, create new RootStore');
      rootStore = new RootStore(initialState);
    }
    console.log('return exist rootStore');
    console.log(initialState);
    return rootStore;
  }
}