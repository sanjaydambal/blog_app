// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';


import './App.css';
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
