import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
