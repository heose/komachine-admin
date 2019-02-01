import React from 'react';
import { shallow } from 'enzyme';
import withHeaderData from '../table-header-data/company';

describe('company view type test', () => {
  it('view type is null', () => {
    const Table = withHeaderData(0);
    const wrapper = shallow(<Table data={[]} />);
    expect(wrapper.props()).toHaveProperty('headerData');
  });
});
