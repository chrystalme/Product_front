import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Furniture from './Furniture';
import Book from './Book';
import Dvd from './Dvd';

const AddProduct = props => {
  const typeView = [<Dvd />, <Furniture />, <Book />];
  const [itemType, setItemType] = useState('');
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const handleSwitchChange = event => {
    const { value } = event.target;
    setItemType(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target;
    setPrice(value);
    setSku(value);
    setName(value);
    const data = {};

    console.log('Form is being submitted');
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
          <input type='text' id='sku' value={sku} />
        </div>
        <div className='form_item'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' value={name} />
        </div>
        <div className='form_item'>
          <label htmlFor='price'>Price ($)</label>
          <input type='number' id='price' value={price} />
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
        <div id='switcher'>
          {itemType}
          {/* {typeView.filter(item => console.log(item))} */}
          {/* <Dvd />
          <Furniture />
          <Book /> */}
        </div>
      </div>
    </form>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
