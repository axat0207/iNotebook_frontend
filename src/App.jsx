import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import NoteState from './context/NoteState';
import Footer from './components/Footer'

const App = () => {
  return (
    <NoteState>
    <div>
    <BrowserRouter>
      <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     
     </Routes>
     <Footer/>
   </BrowserRouter>
   </div>
   </NoteState>
  )
}

export default App

