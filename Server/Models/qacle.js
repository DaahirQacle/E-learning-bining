import mongoose from 'mongoose'
const qacleSchema = mongoose.Schema({
    name:String,
    image:String,
    phone:Number,
    id:String,

})
const qacleData = mongoose.model('QacleModel' , qacleSchema)
export default qacleData;