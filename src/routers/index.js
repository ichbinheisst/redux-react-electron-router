import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../screens/home';
import Load from '../screens/load';
import Product from '../screens/products';
const Routers = () => {
  console.log ('teste ');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/load" element={<Load />} />

      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
