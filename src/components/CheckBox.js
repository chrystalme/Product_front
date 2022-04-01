import React from 'react';
import PropTypes from 'prop-types';

function CheckBox(props) {
  const { handleClick } = props;
  return (
    <>
      <input
        type='checkbox'
        className='delete-checkbox'
        onClick={handleClick}
      />
    </>
  );
}

CheckBox.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CheckBox;
