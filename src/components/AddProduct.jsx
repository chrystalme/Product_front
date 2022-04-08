import React, { Children, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../feature/product/productSlice';
import PropTypes from 'prop-types';
import Furniture from './Furniture';
import Book from './Book';
import Dvd from './Dvd';

const AddProduct = props => {
  const products = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const [height, setHeight] = useState();
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [itemType, setItemType] = useState('');
  const [product, setProduct] = useState({
    Sku: '',
    Name: '',
    Price: '',
    Type: {
      Metric: '',
      value: [],
      unit: '',
    },
  });
  const { Sku, Name, Price, Type } = product;

  const handleSwitchChange = event => {
    const { value } = event.target;
    setItemType(value);
  };
  const handleSubmit = event => {
    event.preventDefault();

    const recordAdd = dispatch(addProduct(product));
    console.log(products);
    console.log(recordAdd);

    // setProduct({
    //   Sku: '',
    //   Name: '',
    //   Price: '',
    //   Type: {
    //     Metric: '',
    //     value: [],
    //     unit: '',
    //   },
    // });
  };

  const handleReset = event => {
    console.log('form will reset');
  };

  return (
    <form className='product_form' onSubmit={handleSubmit}>
      <div>
        <div className='form_header'>
          <h3>Product Add</h3>{' '}
          <div>
            <button type='submit'>Save</button>{' '}
            <button onReset={handleReset}>Cancel</button>
          </div>
        </div>
        <div className='form_item'>
          <label htmlFor='sku'>SKU</label>
          <input
            type='text'
            required
            id='sku'
            name='Sku'
            value={Sku}
            onChange={e => setProduct({ ...product, Sku: e.target.value })}
          />
        </div>
        <div className='form_item'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            required
            name='Name'
            value={Name}
            onChange={e => setProduct({ ...product, Name: e.target.value })}
          />
        </div>
        <div className='form_item'>
          <label htmlFor='price'>Price ($)</label>
          <input
            type='number'
            required
            id='price'
            name='Price'
            value={Price}
            onChange={e => setProduct({ ...product, Price: e.target.value })}
          />
        </div>
        <div className='form_item'>
          <label htmlFor='type_switcher'>Type Switcher</label>
          <select id='productType' onChange={handleSwitchChange}>
            <option value=''>Type Switcher</option>
            <option value='dvd'>DVD</option>
            <option value='furniture'>Furniture</option>
            <option value='book'>Book</option>
          </select>
        </div>
        <div className='form_item' id='switcher'>
          {itemType === 'furniture' && (
            <Furniture
              height={parseInt(height)}
              width={parseInt(width)}
              length={parseInt(length)}
              onChange={() =>
                setProduct({
                  ...product,
                  Type: {
                    Metric: 'Dimension',
                    value: [height, width, length],
                    unit: 'CM',
                  },
                })
              }
              changeHeight={e => setHeight(e.target.value)}
              changeLength={e => setLength(e.target.value)}
              changeWidth={e => setWidth(e.target.value)}
            />
          )}
          {itemType === 'dvd' && (
            <Dvd
              onChange={e =>
                setProduct({
                  ...product,
                  Type: {
                    Metric: 'Size',
                    value: [e.target.value],
                    unit: 'MB',
                  },
                })
              }
            />
          )}
          {itemType === 'book' && (
            <Book
              onChange={e =>
                setProduct({
                  ...product,
                  Type: {
                    Metric: 'Weight',
                    value: [e.target.value],
                    unit: 'Kg',
                  },
                })
              }
            />
          )}
        </div>
      </div>
    </form>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
