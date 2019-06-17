import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/header';

test('it should render Header', () => {
  const component = shallow(<Header />);
  expect(component.find('.header__text').length).toBe(1);
});
