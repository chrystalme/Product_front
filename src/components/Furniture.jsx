import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Furniture = ({
  id = 'furniture',
  onChange,
  changeHeight,
  changeWidth,
  changeLength,
  height,
  length,
  width,
}) => {
  return (
    <div
      onChange={onChange}
      className='furniture_input'
      id={id}
      style={{ display: 'block' }}
    >
      <div>
        <label htmlFor='height'>Height(CM): </label>
        <input
          type='number'
          name='height'
          placeholder='Enter height in centimeter'
          onChange={changeHeight}
          value={height}
        />
      </div>
      <div>
        <label htmlFor='width'>Width(CM): </label>
        <input
          type='number'
          name='width'
          placeholder='Enter width in centimeter'
          onChange={changeWidth}
          value={width}
        />
      </div>
      <div>
        <label htmlFor='length'>Length(CM): </label>
        <input
          type='number'
          name='length'
          placeholder='Enter width in centimeter'
          onChange={changeLength}
          value={length}
        />
      </div>
    </div>
  );
};

Furniture.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  length: PropTypes.number,
};

export default Furniture;
