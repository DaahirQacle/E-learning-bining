import contactInfo from "../Models/contact.js";


export const contactData = async(req,res)=>{
    try{
        const data = await new contactInfo(req.body).save();
        res.send({'qashinle':data})

    }catch(e){
        console.log(e.message)
    }
}