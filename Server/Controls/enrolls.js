import enrolData from "../Models/enroll.js";

export const enrolledUsers = async(req,res)=>{
    try{
        const data = await enrolData(req.body).save()
        res.send(data)
    }
    catch(e){
        console.log(e.message);
    }
}