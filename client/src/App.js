import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopOfPage from './components/topOfPage';
import LoginSignupPage from './pages/loginSignUp';
import HomePage from './pages/HomePage';
import CharacterCreation from './pages/characterCreation';
import DeathScene from './pages/DeathScene';
import Scene1 from './pages/Scene1'; 
import Scene2a from './pages/Scene2a'; import Scene2b from './pages/Scene2b'; import Scene2c from './pages/Scene2c'; import Scene2d from './pages/Scene2d'; import Scene2e from './pages/Scene2e'; 
import Scene3a from './pages/Scene3a'; import Scene3b from './pages/Scene3b'; import Scene3c from './pages/Scene3c'; import Scene3d from './pages/Scene3d'; import Scene3e from './pages/Scene3e';
import Scene4a from './pages/Scene4a'; import Scene4b from './pages/Scene4b'; import Scene4c from './pages/Scene4c'; import Scene4d from './pages/Scene4d'; import Scene4e from './pages/Scene4e';
import Scene5a from './pages/Scene5a'; import Scene5b from './pages/Scene5b'; import Scene5c from './pages/Scene5c'; import Scene5d from './pages/Scene5d'; import Scene5e from './pages/Scene5e';
import Scene6a from './pages/Scene6a'; import Scene6b from './pages/Scene6b'; import Scene6c from './pages/Scene6c'; import Scene6d from './pages/Scene6d'; import Scene6e from './pages/Scene6e';
import Scene7a from './pages/Scene7a'; import Scene7b from './pages/Scene7b';




function App() {
 // DeathScene Logic here? If function to render when in a game? Should be a Let not a Const
  const [isDead, setIsDead] = useState(false);
  //if stat === 0 setIsDead

  function renderGamePage() {
    if (isDead) {
      return <DeathScene />;
    }
  }

  return (
    <Router>
      <TopOfPage />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<LoginSignupPage/>} />
        <Route path='/CC' element={<CharacterCreation />} />
        <Route path='/DS' element={<DeathScene />} />
        <Route path='/S1' element={<Scene1 />} />
        <Route path='/S2a' element={<Scene2a />} />
        <Route path='/S2b' element={<Scene2b />} />
        <Route path='/S2c' element={<Scene2c />} />
        <Route path='/S2d' element={<Scene2d />} />
        <Route path='/S2e' element={<Scene2e />} />
        <Route path='/S3a' element={<Scene3a />} />
        <Route path='/S3b' element={<Scene3b />} />
        <Route path='/S3c' element={<Scene3c />} />
        <Route path='/S3d' element={<Scene3d />} />
        <Route path='/S3e' element={<Scene3e />} />
        <Route path='/S4a' element={<Scene4a />} />
        <Route path='/S4b' element={<Scene4b />} />
        <Route path='/S4c' element={<Scene4c />} />
        <Route path='/S4d' element={<Scene4d />} />
        <Route path='/S4e' element={<Scene4e />} />
        <Route path='/S5a' element={<Scene5a />} />
        <Route path='/S5b' element={<Scene5b />} />
        <Route path='/S5c' element={<Scene5c />} />
        <Route path='/S5d' element={<Scene5d />} />
        <Route path='/S5e' element={<Scene5e />} />
        <Route path='/S6a' element={<Scene6a />} /> 
        <Route path='/S6b' element={<Scene6b />} />
        <Route path='/S6c' element={<Scene6c />} />
        <Route path='/S6d' element={<Scene6d />} />
        <Route path='/S6e' element={<Scene6e />} />
        <Route path='/S7a' element={<Scene7a />} />
        <Route path='/S7b' element={<Scene7b />} />
      </Routes>
      {/* Possible footer */}
    </Router>
  );
}

export default App;
