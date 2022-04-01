import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

function Product(props) {
  const { handleClick } = props;
  return (
    <div>
      <CheckBox handleClick={handleClick} />
    </div>
  );
}

Product.propTypes = {};

export default Product;
