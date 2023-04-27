import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  const [title , setTitle] = useState("");
  const [format , setFormat] = useState("");
  const [surface , setSurface] = useState("");
  const [postcode , setPostcode] = useState("")
  const [numberOfPitches , setNumberOfpitches] =  useState("");
  const [image,setImage] = useState("");
 
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const  formData = new FormData();

      formData.append("title", title);
      formData.append("format",format);
      formData.append("surface",surface);
      formData.append("postcode",postcode);
      formData.append("numberOfPitches",numberOfPitches);
      formData.append("image", image);
      

      const res = await fetch(`http://localhost:4000/api/Turfs`, {
        method: "POST",
        body: formData
      
      });

      const json = await res.json()

      if (res.ok) {
       console.log(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <div style={{ maxWidth: 500, margin: "auto" }}>
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
          }}
          
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit} >
          Submit
        </button>
      </div>
    </div>
    </>
  )
}

export default App
