import React from 'react';
import { shallow, mount } from 'enzyme';

import HotelResults from '../components/hotel_results';
import FilterInput from '../components/filter_input';
import HotelResult from '../components/hotel_result';

test('it should render', () => {
  const component = shallow(<HotelResults />);

  expect(component.find('.filters').length).toBe(1);
});

test('it should render FilterInput', () => {
  const component = shallow(<HotelResults />);

  expect(component.find(FilterInput).exists()).toBe(true);
});

test('it should render HotelResult', () => {
  const component = shallow(<HotelResults />);

  expect(component.find(HotelResult).exists()).toBe(true);
});
