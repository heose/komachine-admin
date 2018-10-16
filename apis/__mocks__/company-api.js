import {fetchCompaniesData} from './data/company-api-data';

const mock = jest.fn().mockImplementation(() => {
  return {
    fetchCompanies: query => {
      return new Promise((resolve, reject) => {
        resolve({status: 200, data: fetchCompaniesData});
        reject('error');
      });
    },
  };
});

export default mock;