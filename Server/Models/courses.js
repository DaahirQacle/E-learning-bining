import { Double } from "mongodb";
import mongoose from "mongoose";

const coursesSchema =mongoose.Schema({
    coursesImage: {
        data: Buffer,
        contentType: String
    },
    category:String,
    coursesName:String,
    lecturerName:String,
    coursesPrice:Number
})


const coursesData=mongoose.model('courseData', coursesSchema)

export default coursesData;