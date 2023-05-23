import axios from 'axios';
import React , {useState} from 'react'

const HostAturf = () => {

  const [step, setStep] = useState(1);
 
  const [title , setTitle] = useState("");
  const [format , setFormat] = useState("");
  const [surface , setSurface] = useState("");
  const [postcode , setPostcode] = useState("");
  const [numberOfPitches , setNumberOfPitches] = useState("");
  const [venue , setVenue] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [startTime , setStartTime] = useState("");
  const [closeTime , setCloseTime] = useState("");
  const [matchDuration , setMatchDuration] = useState("");
  const [image , setImage] = useState("");
  

  const handleFacilities = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFacilities(pre => [...pre , value])
      
    } else {

      setFacilities(pre => {
        return [...pre.filter(facility => facility===value)]
      })
    }
  };
  

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const turfUploader =  async (e) => {
     e.preventDefault();

     try {
      const formdata = new FormData();

      formdata.append("title" , title)
      formdata.append("format" , format)
      formdata.append("surface" , surface)
      formdata.append("postcode" , postcode)
      formdata.append("numberOfPitches" , numberOfPitches)
      formdata.append("venue" , venue)
      formdata.append("facilities" , facilities)
      formdata.append("startTime" , startTime)
      formdata.append("closeTime" , closeTime)
      formdata.append("matchDuration" , matchDuration)
      formdata.append("image" , image)

      axios.post('https://shika-grao-api.onrender.com/api/Turfs' , formdata)
      .then((res) => {
        console.log(res);
        console.log(title);
        console.log(matchDuration);
      })
     } catch (error) {
      console.log(error);
     }
  }
  return (

    <body className=' bg-primary  w-full h-full' >
      <header className='h-56 lg:h-52 w-full mb-4' >
        <div className=' bg-secondary h-full max-w-7xl mx-auto flex flex-col justify-center items-center' >
           <h1 className='text-3xl text-center py-4'>Add Your Turfs To Our Website</h1>
           <p className=' text-2xl text-center py-7' >Follow The Simple Steps And Add Your Turf Below</p>
           <button className=' bg-button h-12 w-24 lg:h-10 left-auto mb-3' > Add </button>
        </div>
      </header>
      <form  onSubmit={turfUploader} className=' bg-light h-auto max-w-7xl mx-auto flex mb-10'>
        {
          step === 1 && (
            <div className='w-full mx-auto flex flex-col  justify-center items-center space-y-8 lg:w-9/12' >

              <h1 className=' text-center text-2xl mt-3'>Phase 1</h1>
              <input 
              className=' w-11/12 lg:w-3/4 h-10 text-center rounded-xl'
              type="text"
               placeholder='Enter Name Of the Turf'
               name='title'
               value={title}
               onChange={(e) => {
                setTitle(e.target.value)
               }} />
               <input
               className='w-11/12 lg:w-3/4  h-10 text-center rounded-xl '
                type="text"
               placeholder='Enter The Format'
               name='format'
               value={format}
               onChange={(e) => {
                 setFormat(e.target.value)
               }} />
               <input
               className='w-11/12 lg:w-3/4  h-10 text-center rounded-xl '
                type="text"
               placeholder='Enter The Surface'
               name='surface'
               value={surface}
               onChange={(e) => {
                 setSurface(e.target.value)
               }} />
               <input
               className='w-11/12 lg:w-3/4  h-10 text-center rounded-xl '
                type="text"
               placeholder='Enter The Postcode'
               name='postcode'
               value={postcode} 
               onChange={(e) => {
                setPostcode(e.target.value)
               }}/>
               <input
               className='w-11/12 lg:w-3/4  h-10 text-center rounded-xl '
                type="text"
               placeholder='Enter The Number Of Pitches'
               name='numberOfPitches'
               value={numberOfPitches}
               onChange={(e) => {
                setNumberOfPitches(e.target.value)
               }}
                />
                <button className="px-4 w-28 h-14 font-bold text-white bg-button rounded hover:bg-blue-700" onClick={handleNext}>Next</button>
                
            </div>
          )
        }
        {
          step === 2 && (
       <div className='w-full  mx-auto flex flex-col justify-center items-center space-y-8 lg:w-9/12' >

                    <h1 className=' text-center text-2xl mt-3'>Phase 2</h1>

             <select className='w-11/12 lg:w-3/4  h-16 text-center rounded-xl' name="venue" value={venue} placeholder='Enter The Venue Type'
              onChange={ (e) => {
                setVenue(e.target.value)
              }} >
              <option value="Enter The Venue Type">Enter The Venue Type</option>
             <option value="Indoor">Indoor</option>
             <option value="Outdoor">Outdoor</option>
             </select>


             <div className=' bg-white w-11/12 h-20 lg:w-3/4 lg:h-16 flex flex-col justify-center items-center space-y-5 rounded-xl' >

              <div>
                   <label htmlFor="">Choose The Facilities You Offer : </label>
               </div>


               <div className=' space-x-4' >

                 <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600"
                      value="changing Rooms"
                      
                      onChange={handleFacilities}
                    />
                    <span className="ml-2 text-gray-700">Changing Rooms</span>
                 </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    value="Flood Lights"
                    
                    onChange={handleFacilities}
                  />
                  <span className="ml-2 text-gray-700">Flood Lights</span>
                </label>
              <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    value="Toilets"
                
                    onChange={handleFacilities}
                  />
                  <span className="ml-2 text-gray-700">Toilets</span>
              </label>

           </div>
      
       </div>

       <div className='bg-white w-11/12 lg:w-3/4 h-16 text-center rounded-xl space-y-3 '  >
        <div>
        <label htmlFor="">Select The Time The Ground is Open :</label>
        </div>
        <div className=' space-x-7' >
        <input value={startTime} name="startTime" 
        onChange={(e) => {
          setStartTime(e.target.value)
        }}
         className=' w-24' type="time"  id="" />
        <input
        value={closeTime}
        onChange={(e) => {
          setCloseTime(e.target.value)
        }}
         className=' w-24' type="time" name="closeTime" id="" />
        </div>
        
       </div>

       <select 
       value={matchDuration} 
       onChange={(e) => {
        setMatchDuration(e.target.value)
       }}
       className='w-11/12 lg:w-3/4 h-16 text-center rounded-xl' name="matchDuration" placeholder='Enter The Venue Type' id="">
              <option value="Choose The Match Duration">Choose The Match Duration</option>
             <option value="1 Hour">1 Hour</option>
             <option value="1 Hour 30 Minutes">1 Hour 30 Minutes</option>
             <option value="2 Hours">2 Hours</option>
             <option value="2 Hours 30 minutes">2 Hours 30 minutes</option>
             <option value="3 Hours">3 Hours</option>
             <option value="3 Hours 30 minutes">3 Hours 30 minutes</option>
             <option value="4 Hours">4 Hours</option>
      </select>

      <input
              className="form-control "
              type="file"
              accept="image/*"
              name="image"
              onChange = {(e) => {
               setImage(  e.target.files[0])
               console.log(e.target.files);
              }}
              
            />

      <div className=" w-3/4 flex justify-between">
           <button className="px-4  w-28 h-14 font-bold text-white bg-button rounded hover:bg-blue-700" onClick={handlePrev}>Back</button>
           <button className="px-4  w-28 h-14 font-bold text-white bg-button rounded hover:bg-blue-700">ADD</button>
      </div>
      


 </div>
            
          )
        }
      </form>
    </body>
  //   <div className="flex flex-col items-center justify-center min-h-screen">
  //   {step === 1 && (
  //     <div className="w-full max-w-md">
  //       <label className="block mb-2 font-bold text-gray-700" htmlFor="username">
  //         Username
  //       </label>
  //       <input className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
  //       <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleNext}>Next</button>
  //     </div>
  //   )}

  //   {step === 2 && (
  //     <div className="w-full max-w-md">
  //       <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
  //         Email
  //       </label>
  //       <input className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
  //       <div className="flex justify-between">
  //         <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handlePrev}>Back</button>
  //         <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleNext}>Next</button>
  //       </div>
  //     </div>
  //   )}

  //   {step === 3 && (
  //     <div className="w-full max-w-md">
  //       <label className="block mb-2 font-bold text-gray-700" htmlFor="password">
  //         Password
  //       </label>
  //       <input className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
  //       <div className="flex justify-between">
  //         <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handlePrev}>Back</button>
  //         <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">Sign up</button>
  //       </div>
  //     </div>
  //   )}
  // </div>
  )
}

export default HostAturf