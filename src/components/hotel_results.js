import React, { useState, Fragment } from 'react';

import Header from './header';
import HotelResult from './hotel_result';
import FilterInput from './filter_input';

import '../styles/hotel_results.scss';

function HotelResults() {
  const [hotelList] = useState(
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

  const[filteredHotelList, setFilteredHotelList] = useState();

  const handleFilterChange = (e) => {
    let filteredHotelList = hotelList.slice();
    filteredHotelList = filteredHotelList.filter(hotel => {
      return (hotel.facilities.some(facility => facility.includes(e.target.value)))
    });

    setFilteredHotelList(filteredHotelList);
  }

  const hotels = filteredHotelList ? filteredHotelList : hotelList;

  return (
    <Fragment>
      <Header />
      <div className='filters'>
        <FilterInput
          type='text'
          filterName='facilities-filter'
          placeholder={ 'Filter by Facilities' }
          onChange={ handleFilterChange }
        />
      </div>
      { hotels.map(hotel => {
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