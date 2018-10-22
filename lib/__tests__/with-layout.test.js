import React from 'react';
import {shallow} from 'enzyme';
import withLayout from '../with-layout';
import DefaultLayout from '../../layouts/DefaultLayout';


const TestComponent = () => {
  return (
    <div>
      <input className="input" type="button" value="test" />
    </div>
  )
};

const TestLayout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
};

describe('layout hoc test', () => {
  it('empty initialize test', () => {
    const WithLayout = withLayout()(TestComponent);
    let wrapper = shallow(<WithLayout />);
    expect(wrapper.findWhere( n => n.type().name === 'DefaultLayout').length).toBe(1);
    expect(wrapper.findWhere( n => n.type().name === 'TestComponent').length).toBe(1);
  });

  it('specific layout initialize test', () => {
    const WithLayout = withLayout(TestLayout)(TestComponent);
    let wrapper = shallow(<WithLayout />);
    expect(wrapper.findWhere( n => n.type().name === 'TestLayout').length).toBe(1);
    expect(wrapper.findWhere( n => n.type().name === 'TestComponent').length).toBe(1);
  });
});