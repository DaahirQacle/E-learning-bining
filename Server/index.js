import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/routes.js'
import cors from 'cors'
import multer from 'multer'
import fs from 'fs'
import coursesData from './Models/courses.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api' ,router )
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/E-learning',(err)=>{
    if(err) throw err
    console.log('Connect to mongodb');
},e=>{console.log(e.message)})
 const port = 300
app.listen(port)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'Sawir')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })

   const upload = multer({storage: storage})
app.post('/api/upload', upload.single('courseImage'), (req, res) => {
    const saveImage =new coursesData({

        coursesImage: {
        data: fs.readFileSync("./Sawir/"+ req.file.filename),
        contentType: 'image/png'
      },
      category:req.body.category,
      coursesName:req.body.coursesName,
      lecturerName:req.body.lecturerName,
      coursesPrice:req.body.coursesPrice

    })
    saveImage.save()
    res.send('waa direy')
    
  })
  app.get('/api/get-data', async (req, res) => {
   try{ const allData=await coursesData.find()
    res.send(allData)}
    catch(e){console.log(e.message)}
  })
  app.get('/api/test' , (req,res)=>{
    res.send('working.......................')
  })