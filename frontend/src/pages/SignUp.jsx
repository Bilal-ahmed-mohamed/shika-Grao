import React from 'react'
import {Link} from 'react-router-dom';


const SignUp = () => {
  return (
    <div className=' w-full h-96 flex justify-center items-center mb-14 mt-20 ' >
         <div className=' bg-light w-5/6 h-96 mx-auto flex justify-center items-center' >
             <div className=' w-2/5 h-32 bg-secondary mr-7 flex justify-center items-center rounded-2xl'>
              <Link to='/TurfOwner' className=' text-3xl'>Host Owner</Link>
             </div>
             <div className=' w-2/5 h-32 bg-secondary flex justify-center items-center rounded-2xl' >
              <Link to='/userNormal' className=' text-3xl'>User</Link>
             </div>
         </div>
    </div>
  )
}

export default SignUp