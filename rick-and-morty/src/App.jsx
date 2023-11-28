import { useState,useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Episodes from './pages/Episodes'
import Locations from './pages/Locations'
import Characters from './pages/Characters'
import Form from './components/Form'
// import ListDisplay from './components/ListDisplay'



function App() {
  

  return (
    <div className='app'>
      <Nav />
      <Form />
 <Routes> 
  <Route path='/' element={<Characters/>}/>
  <Route path='/Episodes' element={<Episodes/>}/>
  <Route path='/Locations' element={<Locations/>}/>
  </Routes>
    </div>
  )
}

export default App
