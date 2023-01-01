import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';
import Home from '../components/Home'
const init = {
  email:'',
  pass:"",
}

function Enroll({show , setShow , price , courseName}) {

  const [login , setLogin] = useState(false);
  const[body , setBody] = useState(init)
  const{ email , pass , } = body;
  const[keyd , setKeyd] = useState([])
  const handleChange = (e)=>{

    setBody({...body,price,courseName ,[e.target.name]:e.target.value})
    // console.log(body)
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
         if( pass!='' && email!=''){
          for(let i=0; i<keyd.length-1; i++)
          {
              if (keyd[i]['pass']==pass && keyd[i]['email']==email){
                flag=true;
                break;
              }
              else{
             
                  flag=false;
              }
          }
          if(flag){
            const {data} = axios.post('http://localhost:300/api/enroll/save' , body)
            toast.success("Welcome Our Somtech ");
            setLogin(!login)
            setShow(!show)
            setBody(init)
          }
          else{
            toast.error('Sorry Sign Up First')
          }
         }
         else {
          toast.error("please fill all the fields")
         }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // if(login){return <Home/>}
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} className="mt-5 my-5">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <form className='' onSubmit={submitHandle}>
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
    <div className='my-3'>
    <label htmlFor="">Price</label>
    <input type="number"   className='form-control  p-3'
      name='price'
      value={price}
      onChange={handleChange}
    />
    </div>
      <button type='submit' className='btn btn-success form-control '>Login</button>
      </form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Enroll