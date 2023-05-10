import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
 
    const [count, setCount] = useState(0)
    const [title , setTitle] = useState("");
      const [format , setFormat] = useState("");
      const [surface , setSurface] = useState("");
      const [postcode , setPostcode] = useState("")
      const [numberOfPitches , setNumberOfpitches] =  useState("");
      const [image,setImage] = useState("");
      const [error , setError] = useState("");
     
      const turfUpload = async (e) => {
    
        e.preventDefault();
    
        try {
    
          const  formdata = new FormData();
    
          formdata.append("title", title);
          formdata.append("format",format);
          formdata.append("surface",surface);
          formdata.append("postcode",postcode);
          formdata.append("numberOfPitches",numberOfPitches);
          formdata.append("image", image);

          axios.post('http://localhost:4000/api/Turfs' , formdata).then((res) => {
            console.log(res);
            console.log(title);
          })
          
    
         
        } catch (error) {
          console.log(error);
        }
      };
    
      return (
        <>

       
         <form onSubmit={turfUpload} style={{ maxWidth: 500, margin: "auto" }}>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Enter title"
              type="text"
              name="title"
              value={title}
              onChange = {(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Enter format"
              type="text"
              name="format"
              value={format}
              onChange = {(e) => {
               setFormat(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Enter surface"
              type="text"
              name="surface"
              value={surface}
              onChange = {(e) => {
                setSurface (e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Enter postcode"
              type="text"
              name="postcode"
              value={postcode}
              onChange = {(e) => {
               setPostcode( e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Enter numberOfPitches"
              type="text"
              name="numberOfPitches"
              value={numberOfPitches}
              onChange = {(e) => {
               setNumberOfpitches( e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="file"
              accept="image/*"
              name="image"
              onChange = {(e) => {
               setImage(  e.target.files[0])
               console.log(e.target.files);
              }}
              
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary"  >
              Submit
            </button>
          </div>
        </form>
        </>
      )
  
}

export default Form