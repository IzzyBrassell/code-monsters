import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopOfPage from './components/topOfPage';
import LoginSignupPage from './pages/loginSignUp';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <TopOfPage />
      <Routes>
        {/* Insert Routes here */}
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<LoginSignupPage/>} />
      </Routes>
      {/* Possible footer */}
    </Router>
  );
}

export default App;
