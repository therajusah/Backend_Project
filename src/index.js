// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`sever is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGOdb connectio failed !!!", err);
})









































// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
// import express from "express"



// (async () =>{
//     try {
//        await mongoose.coonect(`${process.abort.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error) =>{
//         console.log("ERROR : ", error);
//         throw error
//        })
//        app.listen(process.env.PORT, () => {
//         console.log(`app is listening at ${process.env.PORT}`);
//        })


//     } catch (error) {
//         console.error("ERROR: ",error)
//     }
// })()

 


