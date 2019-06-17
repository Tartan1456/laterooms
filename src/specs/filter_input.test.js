import React from 'react';
import { shallow } from 'enzyme';

import FilterInput from '../components/filter_input';

test('it should render', () => {
  const component = shallow(<FilterInput />);

  expect(component.find('.filter-input').length).toBe(1);
});
