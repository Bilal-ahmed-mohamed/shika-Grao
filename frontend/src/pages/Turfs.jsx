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
        // console.log(Turfs);
    }

    useEffect(() => {
        fetchTurfs();
    })
    
  return (
    <body className='' >

<section className=' w-full h-full mb-4   ' >      
<ul class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-12 gap-x-8 p-8">
  {turfs.map((fetchedData) => (
    <li class="relative flex flex-col md:flex-row  rounded-lg shadow-lg p-6 w-full">
      <img src={fetchedData.Image} alt="" class="mb-4 sm:mb-0 sm:mr-6 xl:mb-4 xl:mr-0 rounded-lg object-cover w-full md:w-[15rem] xl:w-[25rem]" />
      <div class="flex flex-col justify-between flex-1 mx-10">
        <div>
          <h3 class="text-indigo-600 font-bold text-lg mb-2">{fetchedData.title}</h3>
          <div className='flex flex-row text-left gap-6 mt-4'>
            <div>
              <p class="text-gray-700"><span className='font-semibold'>Format:</span> {fetchedData.format}</p>
              <p class="text-gray-700"><span className='font-semibold'>Surface:</span> {fetchedData.surface}</p>
            </div>
            <div>
              <p class="text-gray-700"><span className='font-semibold'>Area:</span> {fetchedData.postcode}</p>
              <p class="text-gray-700"><span className='font-semibold'>Pitches:</span> {fetchedData.numberOfPitches}</p>
            </div>
          </div>
        </div>
        <a href="" class="mt-6 inline-flex items-center justify-center h-10 rounded-full text-sm font-semibold bg-blue-600 text-white px-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Book Now
        </a>
      </div>
    </li>
  ))}
</ul>

</section>
    </body>
  )
}

export default Turfs