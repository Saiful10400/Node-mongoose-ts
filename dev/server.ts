import app from "./app";
import { Request,Response } from "express";
import mongoose from "mongoose";
import config from "./config";

// let's connect the mongodb with mongoose.

main().catch(err => console.log(err));

async function main() {
try{
    await mongoose.connect(config.url as string);
    app.listen(config.port,()=>{
       console.log(`The server is running at http://localhost:3000`)
   }) 
} catch(err){
    console.log({err})
} 

 

}
 


app.get("/",(req:Request,res:Response)=>{
    res.send("He devs, how is going your days.and how is your health condition?")
})

