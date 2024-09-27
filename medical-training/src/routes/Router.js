import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import HomePage from '../NavPage/Home';
import Introduce from '../NavPage/Introduce';
import Contact from '../NavPage/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/introduce' element={<Introduce />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default Router;