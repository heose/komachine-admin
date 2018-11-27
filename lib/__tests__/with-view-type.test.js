import React from 'react';
import { shallow } from 'enzyme';
import withViewType from '../with-view-type';

describe('company view type test', () => {
  it('if view type is null', () => {
    const Table = withViewType(0);
    const wrapper = shallow(<Table data={[]} />);
    expect(wrapper.props()).toHaveProperty('headerData');
  });
});
