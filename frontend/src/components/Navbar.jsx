import React from 'react'
import {Link} from 'react-router-dom';
import {BiFootball} from 'react-icons/bi';
const Navbar = () => {
  return (
    <nav className='w-full bg-white py-2' >
      <span className='navBar bg-grey mx-auto py-2  max-w-7xl flex justify-evenly' >
      <div className="logo w-40 float-left  bg-grey flex items-center ">
        <h1 className='' >shikaGrao   </h1>
        <span > <BiFootball size='2em' color='green' /> </span>
      </div>
      <div className=" hidden w-96  space-x-3  md:flex justify-around items-center ">
        <Link to='/' >Home</Link>
        <Link to='/Turfs' > Turfs </Link>
        <Link to='/Host' > Host A New Turf </Link>      
      </div>
      <div className="hidden w-56  space-x-3 md:flex justify-around  ">
        <button> <Link to='/Login' className='hover:text-grey' >Login</Link> </button>
        <button> <Link to='/Signup'>Signup </Link> </button>
      </div>
      <div class=" md:hidden space-y-2 w-20 bg-grey px-6 py-2 ">
      <div class="w-8 h-0.5 bg-blue-600"></div>
      <div class="w-8 h-0.5 bg-blue-600"></div>
      <div class="w-8 h-0.5 bg-blue-600"></div>
      </div>
      </span>
    </nav>
  )
}

export default Navbar