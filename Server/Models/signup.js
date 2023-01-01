import mongoose from 'mongoose'

const regesterSchema = new mongoose.Schema({
    username:String,
    phone:{
      type: Number,
      unique: true 
    },
    email: {
        type: String,
        unique: true 
      },
    pass:String
},{timestamps:true})
const registerData = mongoose.model('RegisteredUsers' , regesterSchema)
export default registerData;