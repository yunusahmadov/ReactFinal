import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'

function App() {
  return (
    <div>
  
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/second-page' element={<SecondPage/>}/>
      </Routes>
    </div>
  )
}

export default App
