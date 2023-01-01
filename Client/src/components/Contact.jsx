import React from 'react'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import '../Styles/contact.css'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Footer from './Footer'
const init = {
  lname:"",
  fname:"" ,
  phone:"",
  email:"",
  subject:"",
  message:""
}
function Contact() {
  const[data , setdata] = useState({init});
  const{ lname, fname , phone, email, subject, message} = data
  const handleChange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    // console.log(data);
  }
  const save = async(e)=>{
    e.preventDefault()
    try{
      if(subject=='' || email==''  || message=='' ){     
        toast.error('You Must Fill Atleast Email , Subject and Message Fields')
      }
      else{
        const {save} = await axios.post('http://localhost:300/api/contact' , data)
        setdata(init)
        toast.success('Thank for Your Message We Will Contact You')
      }
     
    }catch(e){
      toast.error('Sorry something went wrong')
    }
  }
  return (
    <div className='container my-5'>
      <div className="row shadow-lg">
        <div className="col-4 bg-success">
         <div className='text-light my-4'>
         <h1>Contact Us</h1>
          <p>If you have any question or simply want to contact with us
          </p>
       
         </div>
      <div className='text-light my-4'>
      <FiPhone/> <span>+252615284055</span>
         <div>
         <AiOutlineMail/> <span>somtech@info.com</span>
      </div>
         </div>
         <div className='d-flex justify-content-around text-light my-4 '>
         <AiFillGithub/>
         <BsFacebook/>
         <AiFillTwitterCircle/>    
         <SiGmail/>   
          </div> 
        </div>
        <div className="col-8 bg-light">
            <form className='my-4' onSubmit={save} >
          <div className="row">
            <div className="col-6">
            <label htmlFor=""> First Name </label>
            <input type="text"  placeholder='Enter First Name ' className='form-control p-3'
            name='fname'
            value={fname}
            onChange={handleChange}
            />
            </div>
            <div className="col-6">
            <label htmlFor=""> Last Name </label>
            <input type="text"  placeholder='Enter Last Name ' className='form-control p-3'
               name='lname'
               onChange={handleChange}
               value={lname}
            />
               </div>
               
          </div>
          <div className="row my-4">
      
            <div className="col-6">
            <label htmlFor=""> Phone Number</label>
            <input type="text"  placeholder='Enter Your Phone  ' className='form-control p-3'
               name='phone'
               onChange={handleChange}
               value={phone}
            />
            </div>
            
            <div className="col-6">
            <label htmlFor=""> Email</label>
            <input type="text"  placeholder='Enter Your Email ' className='form-control p-3'
               name='email'
               onChange={handleChange}
               value={email}
            />
               </div>
               
          </div>
          <div className="row my-4">
            <label htmlFor=""> Subject</label>
            <div className="col-12">
            <input type="text"  placeholder='Subject ' className='form-control p-3'
               name='subject'
               onChange={handleChange}
               value={subject}
            />
            </div>
               
          </div>
          <div className="row my-4">
          <label htmlFor=""> Message</label>
          <div className="col-12">
            <textarea type="text" rows='4' placeholder='Enter Your Description Here ' className='form-control p-3'
               name='message'
               onChange={handleChange}
               value={message}
            />
               </div>
          </div>
          <div className="row my-4">
          <div className="col-12">
          <div className='d-flex justify-content-end my-3'>
          <button type='submit' className='btn btn-success' onChange={(handleChange)}>Submit</button>
          </div>
               </div>
          </div>
            </form>
          
           </div>
      </div>
  
    </div>
  )
}

export default Contact