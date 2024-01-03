import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";
import categoriesRouter from "../routes/categoriesRouter.js";

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
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/categories/", categoriesRouter);
export default app;