import { data } from './data/github-data';

const getUser = user => {
  return new Promise(((resolve, reject) => {
    data[user] ? resolve(data[user]) : reject({});
  }));
};

export { getUser };
