import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Front Page/Navbar';
import "./App.css"
import Header from './Front Page/Header';
import Middle from './Front Page/Middle';
import MiddleAfter from './Front Page/MiddleAfter';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Middle />
      <MiddleAfter />
    </Router>
  );
}

export default App;
