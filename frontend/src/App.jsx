import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'



function App() {
  return(
    <div className='w-full bg-white' >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Turfs' />
      </Routes>
      
      <Footer/>
      </BrowserRouter>
        
    </div>
  )
}

export default App
