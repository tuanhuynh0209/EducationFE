import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import HomePage from '../NavPage/Home';
import Introduce from '../NavPage/Introduce';
import Contact from '../NavPage/Contact';

import Information from '../page/Information';
import ScientificArticle from '../page/ScientificArticle';
import ScientificResearchTopic from '../page/ScientificResearchTopic';
import ScientificResearchCouncil from '../page/ScientificResearchCouncil';
import Document from '../page/Document';
import ScientificReport from '../page/ScientificReport';
import ScientificResearchProduct from '../page/ScientificResearchProducts';
import Initiative from '../page/Initiative';
import Statistic from '../page/Statistics';
import MainPage from '../pages/MainPage';

const Router = () => {
  return (
    <Routes>
      {/* topnav */}
      <Route path='/home' element={<HomePage />} />
      <Route path='/introduce' element={<Introduce />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/' element={<HomePage />} />

      {/* page */}

      <Route path='/func' element={<MainPage/>}>
        <Route path='/func/information' element={<Information/>}/>
        <Route path='/func/scientificArticle' element={<ScientificArticle/>}/>
        <Route path='/func/scientificResearchTopic' element={<ScientificResearchTopic/>}/>
        <Route path='/func/scientificResearchCouncil' element={<ScientificResearchCouncil/>}/>
        <Route path='/func/document' element={<Document/>}/>
        <Route path='/func/scientificReport' element={<ScientificReport/>}/>
        <Route path='/func/scientificResearchProduct' element={<ScientificResearchProduct/>}/>
        <Route path='/func/initiative' element={<Initiative/>}/>
        <Route path='/func/statistic' element={<Statistic/>}/>
      </Route>
      {/* sidebar */}
    </Routes>
  );
}

export default Router;