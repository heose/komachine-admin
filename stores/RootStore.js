import ClockStore, {initializeClockStore} from './ClockStore';
import CompanyStore from './CompanyStore';


let rootStore = null;


class RootStore {
  constructor(isServer) {
    this.clockStore = initializeClockStore(isServer);
    this.companyStore = new CompanyStore(this);
  }
}

export function initializeStore(isServer) {
  if (isServer) {
    return new RootStore(isServer);
  } else {
    if (rootStore === null) {
      rootStore = new RootStore(isServer);
    }
    return rootStore;
  }
}