import React from 'react'
import {Link} from 'react-router-dom';
import {BiFootball} from 'react-icons/bi';
import { useAuthContext } from '../hooks/useAuthContext';
import {Logout} from '../hooks/Logout';

const Navbar = () => {


  const {user} = useAuthContext();
  const useLogout = Logout();
  const handleClick = () => {
    useLogout();
  }


  return (
    <nav className='w-full bg-primary py-2' >
      <span className='navBar bg-secondary mx-auto py-2  max-w-7xl flex justify-evenly' >
      <div className="logo w-40 float-left flex items-center ">
        <h1 className='' >shikaGrao   </h1>
        <span > <BiFootball size='2em' color='green' /> </span>
      </div>
      <div className=" hidden w-96  space-x-3  md:flex justify-around items-center">
        <Link to='/' >Home</Link>
        <Link to='/Turfs' > Turfs </Link>
        <Link to='/Host' > Host A New Turf </Link>      
      </div>
      <div className="hidden w-56 bg-slate-700  space-x-3 md:flex justify-around  ">

        {
          user && (
            <div className=' w-36 bg-red-400 flex justify-between'>
              <h3 className='flex justify-center items-center'>{user.username}</h3>
             <button onClick={handleClick}> Logout </button>
            </div>
          )
        }

        {
          !user && (
            <div className=' w-32 bg-red-400 flex justify-between'>
                <button> <Link to='/Login' className='' >Login</Link> </button>
                <button> <Link to='/Signup'>Signup </Link> </button>
            </div>
          )
        }
      
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