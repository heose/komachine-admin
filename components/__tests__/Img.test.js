import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {Img} from 'components/Logo';

describe('Img styled components test', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Img width={'10px'} height={'10px'} />, );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
