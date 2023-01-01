import mongoose from 'mongoose';

const rollInfo = mongoose.Schema({
    email:String,
    pass:String,
    price:Number,
    courseName:String
})
const enrolData = mongoose.model('Enrolment' , rollInfo);
export default enrolData;