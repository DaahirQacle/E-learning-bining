
import React, { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Courses from './Courses'
import FormNav from './FormNav'
import Home from './Home'
import Signin from './Signin'
import Signup from './signup'
import ReactPage from '../course_info/ReactPage'
import SqlPage from '../course_info/SqlPage'
import OraclePage from '../course_info/OraclePage'
import JavacriptPage from '../course_info/JavacriptPage'
import FlutterPage from '../course_info/FlutterPage'
import HtmlPage from '../course_info/HtmlPage'

function Pages() {
  return (
    <div>
             <FormNav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/courses/React' element={<ReactPage/>} />
      <Route path='/courses/HTML&CSS' element={<HtmlPage/>} />
      <Route path='/courses/Flutter' element={<FlutterPage/>} />
      <Route path='/courses/SQL Server' element={<SqlPage/>} />
      <Route path='/courses/Oracle' element={<OraclePage/>} />
      <Route path='/courses/Javascript' element={<JavacriptPage/>} />
    
    </Routes>
    </div>
  )
}

export default Pages