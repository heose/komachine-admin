const generateQueryStr = (paramMap) => {
  return Object.keys(paramMap).map((key, index) => {
    const prefix = index === 0 ? '?' : '';
    const value = paramMap[key] || '';
    return `${prefix}${key}=${value}`;
  }).join('&');
};

export default generateQueryStr;