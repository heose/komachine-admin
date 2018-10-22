import React from 'react';
import {shallow} from 'enzyme';
import withGlobalStyle from '../with-global-style';

const TestComponent = () => {
  return (
    <div>
      <input className="input" type="button" value="test" />
    </div>
  )
};

describe('global style hoc test', () => {
  it('have background-color property', () => {
    const WithGlobalStyle = withGlobalStyle({
      style: {backgroundColor: 'black'},
    })(TestComponent);
    const wrapper = shallow(<WithGlobalStyle />);
    expect(wrapper.props().style).toHaveProperty('backgroundColor');
    expect(wrapper.findWhere( n => n.type().name === 'TestComponent').length).toBe(1);
  });
});