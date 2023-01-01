import imageData from "../Models/iskuday.js";
import multer from 'multer';
export const imageResult = async(req,res)=>{
    try{
        const data = await new imageData(req.body).save()
        res.send({'msg':data})
    }catch(e){console.log(e)}
}
var storage = multer.diskStorage( {
    destination:(req,file,cb) =>{
        cb(null , 'Sawir')
    },
 filename:(req,file,cb)=>{
    cb(null , file.originalname)
}});
export const uplaod = multer({storage:storage}).single('testimage')