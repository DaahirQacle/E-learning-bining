import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom'
import {RecoilRoot} from 'recoil'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
  <RecoilRoot>
  <Toaster/>
   <App />
  </RecoilRoot>
   </BrowserRouter>
  </React.StrictMode>,
)
