import React from 'react'
import Navbar from './components/Navbar'
import Meal from './components/Meal'
import { Route,Routes } from 'react-router'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meal/>} />
      </Routes>
    </div>
  )
}

export default App
