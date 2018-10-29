import React from 'react';
import {shallow} from 'enzyme';
import Footer from 'components/Footer';


describe('Footer test', () => {
  it('should renering wither craching', () => {
    const footer = shallow(<Footer />);
    expect(footer.prop('children')).toBe('Footer');
  });
});