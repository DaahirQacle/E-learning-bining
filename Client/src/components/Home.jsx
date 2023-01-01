import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Test from './Test'
import '../Styles/home.css'
import Footer from './Footer'
function Home() {
const[cost , setCost] = useState([])
  useEffect(()=>{
    const getData = async()=>{
      try{
        const {data} = await axios.get('http://localhost:300/api/get-all')
        setCost(data.msg)
      }
      catch(e){
        console.log(e)
      }
    
    }
    getData();
  })
  return (
    <div className='container'>
      <div >
      <h1 className="sm1">Lets Get Skilled</h1>
           <h3 className='mid'>The Most World's Largest Technology Side </h3>
           <h1 className="sm2">SomTech</h1>  
      </div>
        
         
      <div className="row space">
      {
        cost.map((data , index)=>(
        
         <Test data={data} />
    
        ))
      }
      </div>
           {/* <Footer/>   */}
    </div>
    
  )
}

export default Home