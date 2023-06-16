import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import NoteState from './context/NoteState';
import Footer from './components/Footer'
import Private from './components/Private'

const App = () => {
  return (
    <NoteState>
    <div>
    <BrowserRouter>
      
     <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/" element={<Private />} >
        <Route path="" element={<Home />} />
     </Route>
     
     </Routes>
     
   </BrowserRouter>
   </div>
   </NoteState>
  )
}

export default App

