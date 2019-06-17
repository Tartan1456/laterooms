import React, { Fragment } from 'react';

import '../styles/hotel_result.scss';

function HotelResult({ name, starRating, facilities }) {
  return (
    <Fragment>
      <div className='hotel-result'>
        <div>{ name }</div>
        <div>{ starRating }</div>
        <div>{ facilities }</div>
      </div>
    </Fragment>
  )
};

export default HotelResult;