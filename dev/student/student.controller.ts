import { service } from "./student.service"
import { student } from "./student.type"
import { Request,Response } from "express"
const createUser=async(req:Request,res:Response)=>{
    //lets create a user. (deligate the data into the service funciton.)
    
    try{
        const student=req.body.student
        const result=await service.createUser(student)
console.log(result)
        //send the responce.

        res.status(200).json({
            success:true,
            data:result
        })
    
    } catch(err){
        console.log(err)
    }



}

export const controller={createUser}