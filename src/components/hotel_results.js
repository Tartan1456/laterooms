import React, { useState, useEffect, Fragment } from 'react';

import Header from './header';

function HotelResults() {
  const [hotelList, setHotelList] = useState(
    [
      {
        "name": "hotelone",
        "starRating": 5,
        "facilities": ["car park", "pool"]
      },
      {
        "name": "hoteltwo",
        "starRating": 3,
        "facilities": ["car park", "gym"]
      },
      {
        "name": "hotelthree",
        "starRating": 3,
        "facilities": ["gym", "pool"]
      }
    ]
  );


  return (
    <Fragment>
      <Header />
      { hotelList.map(hotel => {
        return (
          <div>{ hotel.name }</div>
        );
      })}
    </Fragment>
  )
};

export default HotelResults;