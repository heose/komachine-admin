import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import YesOrNoFilter from '~/components/YesOrNoFilter';

describe('YesOrNoFilter test', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<YesOrNoFilter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
