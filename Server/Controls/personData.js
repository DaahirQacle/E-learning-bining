import qacleData from '../Models/qacle.js'

export const myData = async(req , res)=>{
    try{
        const data = await qacleData(req.body).save()
        res.send(data)
    }catch(e){
        console.log(e);
    }
}
export const singleData = async(req , res)=>{
    try{
        const data = await qacleData.findOne()
        res.send(data)
    }catch(e){
        console.log(e);
    }
}