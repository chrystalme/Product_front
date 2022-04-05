import React from 'react';
import PropTypes from 'prop-types';
// import Furniture from './Furniture';
// import Book from './Book';
// import Dvd from './Dvd';
import { Link, Outlet } from 'react-router-dom';

function AddProduct(props) {
  // const pages = ['{<Furniture />}', ' {<Book />}', '{<Dvd />}'];
  // const handleSwitchChange = event => {
  //   pages.filter(even)
  // };
  return (
    <form className='product_form'>
      <div>
        <div className='form_header'>
          <h3>Product Add</h3>{' '}
          <div>
            <button>Save</button> <button>Cancel</button>
          </div>
        </div>
        <div className='form_item'>
          <label htmlFor='sku'>SKU</label>
          <input type='text' id='sku' />
        </div>
        <div className='form_item'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='sku' />
        </div>
        <div className='form_item'>
          <label htmlFor='price'>Price ($)</label>
          <input type='text' id='sku' />
        </div>
        <div className='form_item'>
          {/* <label htmlFor='type_switcher'>Type Switcher</label>
          <select id='productType'> */}
          {/* <option value='Type Switcher'>Type Switcher</option>
            <option value='DVD'> */}
          <Link to='dvd'>DVD</Link> |{/* </option> */}
          {/* <option value='Furniture'> */}
          <Link to='furniture'>Furniture</Link> |
          {/* </option>
            <option value='Book'> */}
          <Link to='book'>Book</Link>
          {/* </option> */}
          {/* </select> */}
        </div>
        <Outlet />
      </div>
    </form>
  );
}

AddProduct.propTypes = {};

export default AddProduct;
