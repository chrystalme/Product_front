import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='product_page_header'>
      <div className='header_left'>
        <h2>Product List</h2>
      </div>
      <div className='header_right'>
        <NavLink to='addProduct'>
          {' '}
          <button className='btn_add' type='button'>
            Add
          </button>
        </NavLink>
        <button>Mass Delete</button>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
