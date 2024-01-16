import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";
import categoriesRouter from "../routes/categoriesRouter.js";
import productsRouter from "../routes/productsRoute.js";
import colorRouter from "../routes/colorRouter.js";
import brandsRouter from "../routes/brandsRouter.js";
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
app.use("/api/v1/products/", productsRouter);
app.use("/api/v1/categories/", categoriesRouter);
app.use("/api/v1/brands/", brandsRouter);
app.use("/api/v1/colors/", colorRouter);
export default app;