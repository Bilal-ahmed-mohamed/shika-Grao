import React, { useState } from 'react'
import axios from 'axios'
import {useAuthContext}  from '../hooks/useAuthContext';

const TurfOwner = () => {

  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")
  const [accountType , setAccountType] = useState("HostOwner");
  const [error, setError] = useState("");


  const {dispatch} = useAuthContext();
 

  const addUser = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/users/Signup', {
        username: username,
        email: email,
        password: password,
        accountType: accountType
    })
    .then(response => {
        const json = response.data;
        // console.log("json",json);
        // console.log("message :",json.message);
        const user = json.user;
        // console.log("user", user);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'LOGIN', payload: user });
        setUsername("");
        setEmail("");
        setPassword("");
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



  return (
   <div className='w-full h-auto flex justify-center items-center py-3 mb-7 mt-7' >
      <form onSubmit={addUser} className=' w-full lg:w-5/12 h-96 bg-secondary flex flex-col justify-around'>
        <h1 className=' text-center text-2xl'>Turf Owner Sign Up</h1>
           <input className='w-3/4 h-10 mx-auto text-center rounded-xl' placeholder='Enter Username' type="text"
            name='username' 
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }} />
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
           <button className=' w-32 h-10 mx-auto bg-button'>Sign Up</button>
      </form>
   </div>
  )
}

export default TurfOwner