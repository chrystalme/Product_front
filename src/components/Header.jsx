import React from 'react';
// import {useSe}
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header(props) {
  const handleClick = () => {
    console.log('you have mass deleted');
  };
  return (
    <header className='product_page_header'>
      <div className='header_left'>
        <h2>Product List</h2>
      </div>
      <div className='header_right'>
        <NavLink to='addProduct'>
          {' '}
          <button className='btn_add'>Add</button>
        </NavLink>
        <button onClick={handleClick}>Mass Delete</button>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
