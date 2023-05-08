import React from 'react'
import {Link} from 'react-router-dom';
import { FaInstagram, FaTwitter , FaTiktok } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
const Footer = () => {
  return (
    <footer className=' h-36 lg:h-28 w-full ' >
       <div className=' w-full  lg:max-w-7xl h-full mx-auto lg:flex  bg-slate-700 ' >
        <div className=' w-full h-1/2  lg:w-1/2 lg:h-full flex flex-col justify-center items-center space-x-7' > 
        <div className='space-x-6 ' >
           <Link> Home </Link> 
           <Link> Turf </Link>
           <Link> Log In </Link>
           <Link> Sign Up </Link>
           <Link> Host A Facility </Link>
           </div>

           <div className='' >
            <h2>&copy; 2023</h2>
            </div>  
           
        </div>
        <div className=' w-full h-1/2 lg:w-1/2 lg:h-full flex justify-center items-center' >
          <div className=' w-1/2  h-1/2' >
         <h4>Subscribe to our newsletter</h4>
         <input type="text" placeholder='Email' name="" id="" />
         </div>
           
           <div className=' w-1/2 h-1/2 flex justify-center items-center space-x-7  ' >
           <p><MdFacebook  size="2em" /></p>
           <p><FaInstagram size="2em" /></p>
           <p><FaTwitter size="2em" /></p>
           <p><FaTiktok  size="2em" /></p>
           </div>
           
        </div>
       </div>
    </footer>
  )
}

export default Footer