import reduce from 'lodash/reduce';
import set from 'lodash/set';
import snakeCase from 'lodash/snakeCase';

export const createConsts = (actions, path = [], accum = {}) =>
  reduce(
    actions,
    (result, value, key) => {
      if (typeof value === 'object') {
        return createConsts(value, [...path, key], result);
      }
      set(result, [...path, key], [...path, key].map(p => snakeCase(p).toUpperCase()).join('/'));
      return result;
    },
    accum,
  );
