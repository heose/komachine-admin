/* eslint-disable react/button-has-type */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Router from 'next/router';
import withLink from '../with-link';

const actionWithPromise = () => {
  return new Promise((resolve, reject) => reject());
};
const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
};
Router.router = mockedRouter;

describe('next link hoc test', () => {
  it('does not exist href prop', () => {
    const TestComponent = ({ children, ...props }) => <button {...props}>{children}</button>;
    const WithLink = withLink(TestComponent);
    const rendering = shallow(<WithLink>Hello</WithLink>);
    expect(rendering.html()).toBe('<button>Hello</button>');
  });

  it('correct rendering', () => {
    const TestComponent = ({ children, ...props }) => <a {...props}>{children}</a>;
    const WithLink = withLink(TestComponent);
    const rendering = shallow(<WithLink href="/test">Hello</WithLink>);
    expect(rendering.html()).toBe('<a href="/test">Hello</a>');
  });

  it('should pass down extra props', () => {
    const TestComponent = ({ children, ...props }) => <a {...props}>{children}</a>;
    const WithLink = withLink(TestComponent);
    const rendering = shallow(
      <WithLink href="/test" extraprops="hola">
        Hello
      </WithLink>,
    );
    expect(rendering.children().props()).toHaveProperty('extraprops');
    expect(rendering.children().props().extraprops).toBe('hola');
  });

  it('enabled link click', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const TestComponent = ({ children, ...props }) => <a {...props}>{children}</a>;
    const WithLink = withLink(TestComponent);
    const rendering = mount(
      <WithLink href="/test" extraprops="hola" enabled="enabled">
        Hello
      </WithLink>,
    );
    rendering.find('a').simulate('click', event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('disabled link click', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const TestComponent = ({ children, ...props }) => <a {...props}>{children}</a>;
    const WithLink = withLink(TestComponent);
    const rendering = mount(
      <WithLink href="/test" extraprops="hola" enabled="disabled">
        Hello
      </WithLink>,
    );
    rendering.find('a').simulate('click', event);
    expect(event.preventDefault).toHaveBeenCalledTimes(2);
  });
});
