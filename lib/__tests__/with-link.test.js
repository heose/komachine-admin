import React from 'react';
import {shallow} from 'enzyme';
import withLink from '../with-link';


describe('next link hoc test', () => {

  it('does not exist href prop', () => {
    const TestComponent = ({children, ...props}) => <button {...props}>{children}</button>;
    const WithLink = withLink(TestComponent);
    const rendering = shallow(<WithLink href={'/test'}>Hello</WithLink>);
    expect(rendering.html()).toBe('<button href="/test">Hello</button>');
  });

  it('does not exist href prop', () => {
    const TestComponent = ({children, ...props}) => <a {...props}>{children}</a>;
    const WithLink = withLink(TestComponent);
    const rendering = shallow(<WithLink href={'/test'}>Hello</WithLink>);
    expect(rendering.html()).toBe('<a href="/test">Hello</a>');
  });

  it('does not exist href prop', () => {
    const TestComponent = ({children, ...props}) => <a {...props}>{children}</a>;
    const WithLink = withLink(TestComponent);
    const rendering = shallow(<WithLink href={'/test'} extraprops={'hola'}>Hello</WithLink>);
    expect(rendering.children().props()).toHaveProperty('extraprops');
    expect(rendering.children().props().extraprops).toBe('hola');
  });

});