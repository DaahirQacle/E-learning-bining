import React from 'react'
import { useEffect  , useState} from 'react'
import axios from 'axios'
import Course from './Course'

function Courses() {
  const[values , setValues] = useState([])
  useEffect(()=>{
      const getData = async()=>{
        try{
          const {data} = await axios.get('http://localhost:300/api/get-data')
          setValues(data)
        }
        catch(e){
          console.log(e.message)
        }
      }
      getData()
  })
  return (
    <div className='mx-3 my-4 '>
        <div className="row">
      { 
        values.map((item , index)=>{
          const base64String =btoa(new Uint8Array(item.coursesImage.data.data)
          .reduce(function(data,byte){
            return data + String.fromCharCode(byte)
        }, ""))
       return  <Course item={item} base64String={base64String} key={index}/>
    
        })
      }
      </div>
    </div>
  )
}

export default Courses