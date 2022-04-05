import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ weight }) => {
  return (
    <div className='Book'>
      <label htmlFor='weight'>Weight(KG): </label>
      <input
        className='weight-input'
        type='text'
        placeholder='Enter the weight in KG of the Book'
        value={weight}
      />
    </div>
  );
};

Book.propTypes = {
  weight: PropTypes.number,
};

export default Book;
