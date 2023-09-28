import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './libs/signUp/pages/SignUp';
import DreamHome from './libs/dreamHome/pages/DreamHome';
import Navbar from './common-screen/navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/dreamHome' element={<DreamHome/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;