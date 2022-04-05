import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AddProduct from './components/AddProduct';
import Dvd from './components/Dvd';
import Furniture from './components/Furniture';
import Book from './components/Book';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='addProduct' element={<AddProduct />}>
          <Route path='dvd' element={<Dvd />} />
          <Route path='furniture' element={<Furniture />} />
          <Route path='book' element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
