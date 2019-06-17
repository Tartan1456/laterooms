import React from 'react';
import { shallow } from 'enzyme';

import HotelResult from '../components/hotel_result';

test('it should render', () => {
  const component = shallow(<HotelResult />);

  expect(component.find('.hotel-result').length).toBe(1);
});
