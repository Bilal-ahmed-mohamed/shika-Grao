import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Turfs = () => {
  
    const [turfs , setTurfs] = useState([]);

    const fetchTurfs = async () => {
        const Turfs = await axios.get('http://localhost:4000/api/Turfs')
        setTurfs(Turfs.data.turfs);
        console.log(Turfs);
    }

    useEffect(() => {
        fetchTurfs();
    })
    
  return (
    <body className='' >

        <section className=' w-full h-full mb-4  ' >
          <div className=' max-w-7xl space-y-4 mx-auto lg:flex flex-wrap  lg:space-y-0 lg:justify-between p-10 px-0 ' >
             {
                 turfs.map((fetchedData) => (
                    
          <div key={fetchedData._id} className=' w-3/4 mx-auto bg-secondary space-y-3 lg:mb-5 lg:w-72 h-fit lg:mx-0 rounded-lg ' >
                <img className=' h-40 w-full lg:w-72 lg:h-36' src={fetchedData.Image} alt="" />
                <h1 className=' text-3xl text-center  font-bold ' >{fetchedData.title}</h1>
                <p className='ml-5' > Format : {fetchedData.format}</p>
                <p className=' ml-5' > Surface : {fetchedData.surface}</p>
                <p className='ml-5' > Area : {fetchedData.postcode}</p>
                <p className='ml-5' > Pitches : {fetchedData.numberOfPitches}</p>
                <button className=' bg-button w-28 h-10 block mx-auto' > <Link to={`/IndivualTurf/${fetchedData.id}`}> Book Grao</Link>  </button>
          </div>
                 ))
             }
          </div>
        </section>

    </body>
  )
}

export default Turfs