import express from "express"
import dotnenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
dotnenv.config()
const app = express()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected")
})
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
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is runing at http://localhost:${port}`);
})