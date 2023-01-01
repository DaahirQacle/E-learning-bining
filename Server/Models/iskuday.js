import mongoose from 'mongoose'
const test = mongoose.Schema({
  image:{data:Buffer,contentType:String}
})
const imageData = mongoose.model('try' , test)
export default imageData;