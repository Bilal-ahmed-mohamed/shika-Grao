import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  return(
    <div className='w-full bg-grey' >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/"/>
      <Route path='/Turfs' />
      </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
