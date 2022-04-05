import React from 'react';
import PropTypes from 'prop-types';

const Furniture = ({ height, width, length }) => {
  return (
    <div className='furniture_input'>
      <label htmlFor='height'>Height(CM): </label>
      <input
        type='text'
        name='height'
        placeholder='Enter height in centimeter'
        value={height}
      />
      <label htmlFor='width'>Width(CM): </label>
      <input
        type='text'
        name='width'
        placeholder='Enter width in centimeter'
        value={width}
      />
      <label htmlFor='length'>Length(CM): </label>
      <input
        type='text'
        name='length'
        placeholder='Enter width in centimeter'
        value={length}
      />
    </div>
  );
};

Furniture.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  length: PropTypes.number,
};

export default Furniture;
