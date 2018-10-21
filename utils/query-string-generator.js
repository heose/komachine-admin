const generateQueryStr = (paramMap) => {
  return Object.keys(paramMap).reduce((accum, key, index) => {
    if (paramMap[key]) {
      const value = paramMap[key] || '';
      accum.push(`${key}=${value}`);
    }
    return accum;
  }, []).join('&');
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

export const excludeQueryStr = (queryStr, excludes = []) => {
  return generateQueryStr(toMapFromQueryStr(queryStr, excludes));
};

export const updateQueryStr = (queryStr, update = {}) => {
  return generateQueryStr({...toMapFromQueryStr(queryStr), ...update});
};

export default generateQueryStr;