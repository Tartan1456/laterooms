import React from 'react';
import ReactDOM from 'react-dom';
import HotelResults from '../components/hotel_results';

it('renders HotelResults', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HotelResults />, div);
  ReactDOM.unmountComponentAtNode(div);
})