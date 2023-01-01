import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import ReactCurriculum from "./ReactCurriculum";
import axios from 'axios';
import Enroll from "./Enroll";
function ReactPage() {
  const [show, setShow] = useState(false);
  const[values , setValues] = useState([]);
  const[courseName , setCourseName] = useState([]);
  const[price , setPrice] = useState([]);
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
    values.map((i)=>{
      if(i.coursesName=='React'){
        setPrice(i.coursesPrice)
        setCourseName(i.coursesName)
      }
     
    })
})

  return (
    <div className="container">
      <div className="row my-4 ">
        <div className="col-8 my-4">
          <h1 className="shadow-lg p-5 text-center my-5">Course Deatils</h1>
          <div className="shadow-lg  p-5 ">
            <h1 className="text-center">What You Will Learn</h1>
            <div className="row my-4">
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Build powerful fast, user-friendly and reactive web apps </span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Master the latest ecosystem of a React Developer from scratch</span>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Learn the latest features in React including Hooks Context API. </span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Learn modern React by building 4 projects </span>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Use cutting-edge ES6/ES7 JavaScript</span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Learn how to use context and reducers to manage global state</span>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Setup authentication and user accounts wth google auth</span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Learn the latest React libraries and tools</span>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Master React Redux, React-Router, and more </span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Deploy your projects with vercel and railway</span>
              </div>
            </div>
          </div>
          <div className="my-4 shadow-lg">
            <h1 className="text-center fs-3 my-4 ">Course Curriculum</h1>
            <p className="text-center ">
              We’re committed to changing the future of learning for the better
              and provide the tools and skills to teach what you love.
            </p>
            <ReactCurriculum />
          </div>
        </div>

        <div className="col-4 shadow-lg my-5" style={{height:"420px" , top:"10px"}}>
          <div className="Card mx-3 ">
            <h3 className="text-center my-5">This Course Includes</h3>
            <p>
              <MdOutlineOndemandVideo className="text-success" />{" "}
              <span>30 Hours and 12 Minutes Of HD videos</span>
            </p>
            <p>
              <BsPeopleFill className="text-success" />{" "}
              <span>Access to exclusive SomTech community</span>
            </p>
            <p>
              <FaCertificate className="text-success" />{" "}
              <span>Certificate of Completion</span>
            </p>
            <p> <MdAttachMoney className="text-success"/>
              {price}.00 For Life Time Access</p>
          
             <button className="btn btn-success form-control p-2 "
              onClick={(e)=>setShow(!show)}>Enroll</button>
          </div>
        </div>
      </div>
      <Enroll show={show} setShow={setShow} price ={price} courseName ={courseName}/>
    </div>
  );
}

export default ReactPage;
