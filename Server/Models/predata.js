import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    title:{type:String},
    desc:{type:String},

})
const userData = mongoose.model('courses' , userSchema)
export default userData