export const generateQueryStr = paramMap =>
  Object.keys(paramMap)
    .reduce((accum, key) => {
      if (paramMap[key]) {
        accum.push(`${key}=${paramMap[key]}`);
      }
      return accum;
    }, [])
    .join('&');

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
