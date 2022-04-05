import { useState, useId } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import data from '../data.json';

const Products = ({ products }) => {
  products = data;
  const [toDelete, setToDelete] = useState({ deleteSku: [] });
  const handleChange = e => {
    // Destructuring
    const { value, checked } = e.target;
    const { deleteSku } = toDelete;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setToDelete({
        deleteSku: [...deleteSku, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setToDelete({
        deleteSku: deleteSku.filter(e => e !== value),
      });
    }
  };
  console.log(toDelete);
  return (
    <div className='products_list'>
      {products.map((product, id) => (
        <Product
          key={useId + id}
          handleChange={handleChange}
          product={product}
        />
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.instanceOf(Array),
};

export default Products;
