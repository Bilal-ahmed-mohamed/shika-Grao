import axios from 'axios'
import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
const Login = () => {

  const [password , setPassword] = useState("")
  const [email , setEmail] = useState("")
  const {dispatch} = useAuthContext();

  const Login = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:4000/api/users/Login' , {
       email : email,
       password : password

    })
    .then(response => {
      const {user, token} = response.data;
      const userData = {...user, token};

      // const json = response.data;
      // console.log("json",json);
      // // const user = json.user;
      // console.log("user", user);
      // console.log(response);
      localStorage.setItem('user', JSON.stringify(userData));
      dispatch({ type: 'LOGIN', payload: userData });
      setEmail("")
      setPassword("")
    })
     
  }
  return (
    <div className='w-full h-auto flex justify-center items-center py-3 mb-7 mt-7' >
    <form onSubmit={Login}  className=' w-full lg:w-5/12 h-96 bg-secondary flex flex-col justify-around'>
      <h1 className=' text-center text-2xl'>Login</h1>
       
         <input className='w-3/4 h-10 mx-auto text-center rounded-xl' type="text" placeholder='Enter Email'
         name='email'
         value={email}
         onChange={(e) => {
          setEmail(e.target.value)
         }} />
         <input className='w-3/4 h-10 mx-auto text-center rounded-xl' type="text" placeholder='Enter Password'
         name='password' 
         value={password}
         onChange={(e) => {
          setPassword(e.target.value)
         }} />
         <button className=' w-32 h-10 mx-auto bg-button'>Log In</button>
    </form>
 </div>
  )
}

export default Login