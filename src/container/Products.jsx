import { useState, useId, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, removeProduct } from '../feature/product/productSlice';

const Products = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getProducts());
  }, [products, dispatch]);
  const [toDelete, setToDelete] = useState({ deleteSku: [] });

  const handleChange = e => {
    // Destructuring
    const { value, checked } = e.target;
    const { deleteSku } = toDelete;

    // console.log(`${value} is ${checked}`);
    checked
      ? setToDelete({
          deleteSku: [...deleteSku, value],
        })
      : setToDelete({
          deleteSku: deleteSku.filter(e => e !== value),
        });
  };

  console.log(toDelete);
  return (
    <>
      <Header
        handleDelete={() => dispatch(removeProduct(toDelete.deleteSku))}
      />
      <div className='products_list'>
        {products.map((product, id) => (
          <Product
            key={useId + id}
            handleChange={handleChange}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.instanceOf(Array),
};

export default Products;
