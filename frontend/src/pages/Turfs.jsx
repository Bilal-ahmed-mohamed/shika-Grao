import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { useTurfsContext } from '../hooks/useTurfsContext';



const Turfs = () => {
  
    const [turfs , setTurfs] = useState([]);
    // const {Turfs , dispatch} = useTurfsContext();

     
    const fetchTurfs = async () => {
        const Turfs = await axios.get('http://localhost:4000/api/Turfs')
        setTurfs(Turfs.data.turfs);
        // dispatch({type: 'SET_TURFS' , payload:data})
        console.log(Turfs);
    }

    useEffect(() => {
        fetchTurfs();
    })
    
  return (
    <body className='' >

        <section className=' w-full h-full mb-4   ' >
          <div className=' p-2 max-w-7xl mx-auto lg:flex lg:justify-between flex-wrap' >
             {
                 turfs.map((fetchedData) => (
                    
          <div key={fetchedData._id} className=' p-4 bg-secondary  rounded mb-4  shadow-md  dark:bg-gray-800 ' >
            <div className='relative w-full  h-40 mb-2'>
            <img className=' h-40 w-full lg:w-72 lg:h-40' src={fetchedData.Image} alt="" />
            </div>
            <div className='flex items-center justify-between mb-4'>
            <h1 className=' text-3xl text-center  font-bold ' >{fetchedData.title}</h1>
            </div>
            <div className='flex items-center justify-between mb-2'>
            <h2 class=" font-medium dark:text-gray-400"> Format</h2>
                    <span
                        class="inline-block px-2 py-1  text-blue-500 rounded-full dark:bg-gray-700 dark:text-blue-400 bg-blue-50">
                         {fetchedData.format}
                    </span>
            </div>
            <div className='flex items-center justify-between mb-2'>
            <h2 class=" font-medium dark:text-gray-400">Surface</h2>
                    <span class="inline-block px-2 py-1  text-gray-600 dark:text-gray-400">
                    {fetchedData.surface}
                    </span>
            </div>
            <div className='flex items-center justify-between mb-2'>
            <h2 class=" font-medium dark:text-gray-400">Area</h2>
                    <span class="inline-block px-2 py-1  text-gray-600 dark:text-gray-400">
                    {fetchedData.postcode}
                    </span>
            </div>
            <div  className='flex items-center justify-between mb-2'>
            <h2 class=" font-medium dark:text-gray-400">Pitches</h2>
                    <span class="inline-block px-2 py-1  text-gray-600 dark:text-gray-400">
                    {fetchedData.numberOfPitches}
                    </span>
            </div>
            <div class="flex items-center justify-between ">
                    
                    <button href="#" class="px-3 py-2 text-xs text-white bg-button rounded hover:bg-buttonHover">
                    <Link to={`/IndivualTurf/${fetchedData.id}`}> Book Grao</Link>
                        </button>
                </div>
      
                
          </div>
                 ))
             }
          </div>
        </section>

    </body>
  )
}

export default Turfs