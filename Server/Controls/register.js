import registerData from "../Models/signup.js";
export const saveData = async(req,res)=>{
    try{
        const data = registerData(req.body)
        data.save();
        res.send(data);
    }catch(e){
        console.log(e.message);
    }

}

export const getData = async(req,res)=>{
    try{
        const data = await registerData.find()
        res.send(data);
    }catch(e){
        console.log(e.message);
    }

}