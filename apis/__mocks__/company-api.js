/* eslint-disable no-unused-expressions, prefer-promise-reject-errors */
import { companies, validFilterValue, sizePerPage } from './data/company-api-data';

const makeResult = ({ page = 1, isActive, hasRelation }) => {
  const validData = {};
  Object.keys(companies)
    .sort((a, b) => a - b)
    .forEach(id => {
      if (isActive && companies[id].isActive !== isActive) {
        return;
      }
      if (hasRelation && companies[id].hasRelation !== hasRelation) {
        return;
      }
      validData[id] = companies[id];
    });
  const start = (page - 1) * sizePerPage;
  const end = start + sizePerPage;
  const hasPrev = page > 1;
  const hasNext = Object.keys(companies).length >= end;
  const table = {};
  const list = [];
  Object.keys(validData)
    .slice(start, end)
    .forEach(id => {
      list.push(id);
      table[id] = validData[id];
    });
  const validFilter = {};
  if (validFilterValue.isActive.includes(isActive)) {
    validFilter.isActive = isActive;
  }
  if (validFilterValue.hasRelation.includes(hasRelation)) {
    validFilter.hasRelation = hasRelation;
  }
  const result = { table, list, page, hasPrev, hasNext, ...validFilter };
  return { result };
};

const mock = jest.fn().mockImplementation(() => ({
  fetchCompanies: ({ throwError, ...query }) =>
    new Promise((resolve, reject) => {
      process.nextTick(() => {
        !throwError ? resolve({ status: 200, data: makeResult(query) }) : reject({ error: 'error' });
      });
    }),
}));

export default mock;
