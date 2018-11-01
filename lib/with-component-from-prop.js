import { createElement } from 'react';

export default (propName = 'a') => {
  return props => {
    const component = props[propName] || 'a';
    const rest = { ...props };
    delete rest[propName];
    return createElement(component, rest);
  };
};
