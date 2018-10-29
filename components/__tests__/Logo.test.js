import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from 'components/Logo';


describe('Logo test', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Logo src="" height="30px"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const wrapper = mount(<Logo src="" width={'20px'} height={'20px'}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
