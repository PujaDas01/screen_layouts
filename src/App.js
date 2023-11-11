import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './libs/signUp/pages/SignUp';
import DreamHome from './libs/dreamHome/pages/DreamHome';
import Navbar from './common-screen/navbar/Navbar';
import Calculator from './libs/calculator/pages/Calculator';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/dreamHome' element={<DreamHome/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;