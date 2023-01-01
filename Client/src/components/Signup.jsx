import React, { useState } from 'react'
import '../Styles/in.css'
import axios from'axios'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import Home from './Home'
const init = {
  username:'',
  phone:0,
  email:'',
  pass:""

}
function Signup() {
  const [login , setLogin] = useState(false);
  const[body , setBody] = useState(init);
  const{username , phone , email , pass} = body;
  const[keyd , setKeyd] = useState([])
  const handleChange = (e)=>{
    setBody({...body ,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    const getData = async()=>{
      try{
        const {data} = await axios.get('http://localhost:300/api/register/get-all')
        setKeyd(data)
      
      }catch(e){
        console.log(e);
      }
    }
    getData()
  },[])
  const submitHandle = async(e)=>{
    e.preventDefault()  
    let flag=false;
         if(username!='' && pass!='' && email!='' && phone!=''){
          for(let i=0; i<keyd.length-1; i++)
          {
              if (keyd[i]['phone']==phone || keyd[i]['email']==email){
                flag=true;
                break;
              }
              else{
             
                  flag=false;
              }
          }
          if(flag){
            toast.error("sorry already registered, Sign In")
          }
          else{
            try{
                 const {data} = axios.post('http://localhost:300/api/register/save', body)
                 setBody(init)
                 toast.success("congrats, registered successfully");
                setLogin(!login)
            }
            catch(e){
              console.log(e)
            }
          }
         }
         else {
          toast.error("please fill all the fields")
         }
  }
  if(login){return <Home/>}
  return (


    <div className='container'>

      <form className='spacing shadow-lg' onSubmit={submitHandle}>
    <div className='my-3'>
      <label htmlFor="">Username</label>
    <input type="text"  placeholder='User Name ' className='form-control  p-3'
    name='username'
    value={username}
    onChange={handleChange}
    />
    </div >
    <div className='my-3'>
    <label htmlFor="">Phone</label>
    <input type="number"  placeholder='Enter Phone Number' className='form-control  p-3'
      name='phone'
      value={phone}
      onChange={handleChange}
    />
    </div>
    <div className='my-3'>
    <label htmlFor="">Email</label>
    <input type="email"  placeholder='Enter Email ' className='form-control  p-3'
      name='email'
      value={email}
      onChange={handleChange}
    />
    </div>
    <div className='my-3'>
    <label htmlFor="">Password</label>
    <input type="password"  placeholder='Enter Password ' className='form-control  p-3'
      name='pass'
      value={pass}
      onChange={handleChange}
    />
    </div>
    <div>
      <button type='submit' className='btn btn-success form-control ' onChange={handleChange}>Register</button>
    </div>
      </form>
    </div>
  )
}

export default Signup