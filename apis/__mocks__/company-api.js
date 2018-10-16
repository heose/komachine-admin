import {fetchCompaniesData} from './data/company-api-data';

const mock = jest.fn().mockImplementation(() => {
  return {
    fetchCompanies: query => {
      return new Promise((resolve, reject) => {
        resolve(fetchCompaniesData);
        reject('error');
      });
    },
  };
});

export default mock;