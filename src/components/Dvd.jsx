import React from 'react';
import PropTypes from 'prop-types';

function Dvd({ size, id = 'dvd' }) {
  return (
    <div className='Dvd' id={id} style={{ display: 'block' }}>
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
  show: PropTypes.string,
};

export default Dvd;
