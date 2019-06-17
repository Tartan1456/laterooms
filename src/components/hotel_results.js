import React, { useState, useEffect, Fragment } from 'react';

import Header from './header';
import HotelResult from './hotel_result';

function HotelResults() {
  const [hotelList, setHotelList] = useState(
    [
      {
        "id": 156,
        "name": "hotelone",
        "starRating": 5,
        "facilities": ["car park", "pool"]
      },
      {
        "id": 178,
        "name": "hoteltwo",
        "starRating": 3,
        "facilities": ["car park", "gym"]
      },
      {
        "id": 213,
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
          <HotelResult
            key={ hotel.id }
            {...hotel}
          />
        );
      })}
    </Fragment>
  )
};

export default HotelResults;