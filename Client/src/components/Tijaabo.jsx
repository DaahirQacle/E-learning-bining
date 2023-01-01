import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const init = {
image:''
}
function Tijaabo() {
    const[image ,  setImage] = useState(init)
    const handleChange = async(e)=>{
        setImage(e.target.files[0])
    }
    const submit = async(e)=>{
        e.preventDefault()
        try{
            const {save} = await axios.post('http://localhost:300/api/image' , image)
        }catch(e){console.log(e);}
    }
  return (
    <div>
        <form onSubmit={submit}>
        <input type="file" placeholder="Enter Your Picture" 
        name='image'
        value={image.image}
                onChange={handleChange}
                />
                  <button type='submit' className='btn btn-success' onChange={(handleChange)}>Submit</button>
        </form>
        {/* { <img src={URL.createObjectURL(image)} width="200" height="100" />} */}
    </div>
  )
}

export default Tijaabo