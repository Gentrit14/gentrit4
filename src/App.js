import React from 'react';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/About' element={<About />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
