import React, { Fragment } from 'react';

import '../styles/hotel_result.scss';

function HotelResult({ name, starRating, facilities }) {
  const displayStarRating = (starRating) => {
    let starRatings = [];

    for (let i = 0; i < starRating; i++) {
      starRatings.push(
        <img key={ i } className='hotel-result__star' src={ require('../assets/star.png') } alt={`${starRating} star rating`} />
      )
    }

    return starRatings;
  };

  const displayFacilities = (facilitiesArray) => {
    const facilities = [];

    for (let i = 0; i < facilitiesArray.length; i++) {
      facilities.push(
        <div key={ i } className='hotel-result__facility'>
          { facilitiesArray[i] }
        </div>
      )
    }

    return facilities;
  };

  return (
    <Fragment>
      <div className='hotel-result'>
        <img className='hotel-result__image' src={ require('../assets/hotel_img_placeholder.png') } alt={name} />
        <div className='hotel-result__information'>
          <div className='hotel-result__name'>{ name }</div>
          <div className='hotel-result__star-rating'>
            { displayStarRating(starRating) }
          </div>
          <div className='hotel-result__facilities'>
            Facilities: { displayFacilities(facilities) }
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default HotelResult;