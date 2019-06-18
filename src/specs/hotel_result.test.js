import React from 'react';
import { shallow } from 'enzyme';

import HotelResult from '../components/hotel_result';

test('it should render', () => {
  const hotel = {
    "id": 156,
    "name": "Hotel One",
    "starRating": 5,
    "facilities": ["car park", "pool"]
  }

  const component = shallow(<HotelResult {...hotel} />);

  expect(component.find('.hotel-result').length).toBe(1);
});
