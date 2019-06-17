import React from 'react';

import '../styles/filter_input.scss';

function FilterInput ({ type, filterName, placeholder, onChange }) {
  return (
    <input
      type={ type }
      name={ filterName }
      aria-label={ filterName }
      placeholder={ placeholder }
      onChange={(e) => onChange(e)}
      className='filter-input'
    />
  )
}

export default FilterInput;