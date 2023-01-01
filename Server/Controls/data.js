import userData from '../Models/predata.js';
export const selectAll = async(req , res)=>{
    try{
        const user = await  userData.find()
        res.send({msg: user})
    }catch(e){
        console.log(e.message);
    }

}
export const insert = async(req , res)=>{
    try{
        const data = await new userData(req.body).save();
        // console.log(data)
        res.json({'status': true , "mesaage":data})
    }catch(err){
        res.json({'status': false , "message":err.message})
       
    }
}