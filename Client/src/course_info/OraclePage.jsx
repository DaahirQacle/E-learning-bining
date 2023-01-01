import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import OracleCurriculam from "./OracleCurriculam";
import axios from 'axios';
import Enroll from "./Enroll";
function OraclePage() {
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
      if(i.coursesName=='Oracle'){
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
                <span> Understand oracle database</span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Become database adminstrator</span>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Understand releational database</span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>How oracle database works</span>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>Craete complete database</span>
              </div>
              <div className="col-6">
                <BsCheck2 className="text-success fs-3 " />
                <span>manage database system</span>
              </div>
            </div>
        
          </div>
          <div className="my-4 shadow-lg">
            <h1 className="text-center fs-3 my-4 ">Course Curriculum</h1>
            <p className="text-center mx-3 ">
            The primary objective of this Oracle 11g training part I course is to
             provide an introduction to the PL/SQL database programming language 
             covering syntax, structure, and features of the language within the 
             context of database applications and programming. This Oracle 11g 
            course will prepare students for the Oracle certification exams (OCP).
            </p>
            <OracleCurriculam />
          </div>
        </div>

        <div className="col-4 shadow-lg my-5" style={{height:"420px" , top:"10px"}}>
          <div className="Card mx-3 ">
            <h3 className="text-center my-5">This Course Includes</h3>
            <p>
              <MdOutlineOndemandVideo className="text-success" />{" "}
              <span>22 Hours and 6 Minutes Of HD videos</span>
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

export default OraclePage;
