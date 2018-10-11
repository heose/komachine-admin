import {action, observable} from 'mobx';

let store = null;

export default class ClockStore {
  @observable lastUpdate = 0;
  @observable light = false;

  constructor(initialState) {
    this.lastUpdate = Date.now();
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now();
      this.light = true;
    }, 1000);
  };

  stop = () => clearInterval(this.timer);
}

export function initializeClockStore(isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new ClockStore(isServer, lastUpdate);
  } else {
      if (store === null) {
      store = new ClockStore(isServer, lastUpdate);
    }
    return store;
  }
}