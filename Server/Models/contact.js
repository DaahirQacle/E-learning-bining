import mongoose from 'mongoose';
const contactSchema = mongoose.Schema({
fname:{type:String },
lname:{type:String},
phone:{type:Number},
email:{type:String , required: true},
subject:{type:String , required: true},
message:{type:String , required:true}

},{ timestamps:true});
const contactInfo = mongoose.model('Contact-Info' ,contactSchema )
export default contactInfo;