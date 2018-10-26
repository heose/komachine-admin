import React from 'react';
import {shallow} from 'enzyme';
import withComponentFromProp from '../with-component-from-prop';


describe('dynamically rendering component from prop', () => {
  it('empty hoc', () => {
    const Component = withComponentFromProp();
    const rendering = shallow(<Component>Hello</Component>);
    expect(rendering.html()).toBe('<a>Hello</a>');
  });

  it('does not exist component prop', () => {
    const Component = withComponentFromProp('component');
    const rendering = shallow(<Component>Hello</Component>);
    expect(rendering.html()).toBe('<a>Hello</a>');
  });

  it('not found component', () => {
    const Component = withComponentFromProp('component');
    const rendering = shallow(<Component component={'aaa'}>Hello</Component>);
    expect(rendering.html()).toBe('<aaa>Hello</aaa>');
  });

  it('should rendering dynamically changed', () => {
    const TestComponent = ({children}) => <button>{children}</button>;
    const Component = withComponentFromProp('component');
    const rendering = shallow(<Component component={TestComponent}>Hello</Component>);
    expect(rendering.html()).toBe('<button>Hello</button>');
  })
});
