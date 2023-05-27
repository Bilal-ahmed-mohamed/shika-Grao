import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Turfs from './pages/Turfs'
import HostAturf from './pages/HostAturf'
import SignUp from './pages/SignUp'
import TurfOwner from './pages/TurfOwner'
import UserNormal from './pages/UserNormal'
import Login from  './pages/Login'
import IndivualTurf from './pages/IndivualTurf'



function App() {
  return(
    <div className='w-full bg-primary' >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Turfs' element={<Turfs/>} />
      <Route path='/Host' element={<HostAturf/>} />
      <Route path='/Signup' element={<SignUp/>} />
      <Route path='/TurfOwner' element={<TurfOwner/>}  />
      <Route path='/userNormal' element={<UserNormal/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/IndivualTurf' element={<IndivualTurf/>} />
      </Routes>
      
      <Footer/>
      </BrowserRouter>
        
    </div>
  )
}

export default App
