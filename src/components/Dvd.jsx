import React from 'react';
import PropTypes from 'prop-types';

function Dvd({ size }) {
  return (
    <div className='Dvd'>
      <label htmlFor='weight'>Size(MB): </label>
      <input
        className='weight-input'
        type='text'
        placeholder='Enter the size in Megabytes of the Book'
        value={size}
      />
    </div>
  );
}

Dvd.propTypes = {
  size: PropTypes.number,
};

export default Dvd;
