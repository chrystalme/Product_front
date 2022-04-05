import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

const Product = ({ product, handleChange }) => {
  const { Sku, Name, Price, Type } = product;

  return (
    <div className='product'>
      <CheckBox value={Sku} onChange={handleChange} />
      <dl className='product_details'>
        <dd>{Sku}</dd>
        <dd>{Name}</dd>
        <dd>${Price}</dd>
        <dd>
          {Type.Metric}: {Type.Value[0]}
          {Type.Unit}
        </dd>
      </dl>
    </div>
  );
};

Product.propTypes = {
  handleChange: PropTypes.func,
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;
