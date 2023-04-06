import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <TopOfPage />
      <Routes>
        {/* Insert Routes here */}
      </Routes>
      {/* Possible footer */}
    </Router>
  );
}

export default App;
