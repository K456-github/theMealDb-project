import React from 'react'
import Navbar from './components/Navbar'
import Meal from './components/Meal'
import Detail from './components/Detail'
import { Route,Routes } from 'react-router'

const App = () => {
  return (
    <div className='container bg-rose-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meal/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
