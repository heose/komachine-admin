export const generateQueryStr = queryMap =>
  Object.keys(queryMap)
    .reduce((accum, key) => {
      if (queryMap[key]) {
        accum.push(`${key}=${queryMap[key]}`);
      }
      return accum;
    }, [])
    .join('&');

export const toQueryMap = queryStr => {
  const query = queryStr.startsWith('?') ? queryStr.slice(1) : queryStr;
  return query.split('&').reduce((result, q) => {
    const [key, value] = q.split('=');
    if (value) {
      result[key] = value;
    }
    return result;
  }, {});
};

export const toMapFromQueryStr = (queryStr, excludes = []) => {
  const toMap = {};
  queryStr.split('&').forEach(query => {
    const [key, value] = query.split('=');
    if (excludes.includes(key)) {
      return;
    }
    if (value) {
      toMap[key] = value;
    }
  });
  return toMap;
};

export const excludeQueryStr = (queryStr, excludes = []) => generateQueryStr(toMapFromQueryStr(queryStr, excludes));

export const updateQueryStr = (queryStr, update = {}) =>
  generateQueryStr({ ...toMapFromQueryStr(queryStr), ...update });

export default generateQueryStr;
