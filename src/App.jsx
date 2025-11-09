import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agents from './pages/Agents.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Agents' element={<Agents />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App