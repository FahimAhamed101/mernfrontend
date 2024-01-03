import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import dbConnect from "../config/dbConnect.js";



dotenv.config();
//db connect
dbConnect();
const app = express();
//cors
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use((err,req,res,next)=>{
    res.status(500).send({
        massage:err.massage
    });;
});

app.get('/',(req,res)=>{
    res.send("hello")
});

export default app;