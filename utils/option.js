import generateQueryStr from './query-string-generator';

export default class Option {
  constructor(options) {
    this.options = options || {};
  }

  update(options = {}) {
    this.options = {...this.options, ...options}
  }

  excludedToString(...excludes) {
    const excluded = {...this.options};
    excludes.forEach(exclude => {
      delete excluded[exclude]
    });
    return generateQueryStr(excluded);
  }

  toString() {
    return generateQueryStr(this.options);
  }
}