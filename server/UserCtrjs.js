import User from "./User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"

export const registerUser = asyncHandler(async(req,res)=>{
    const {fullname,email,password} = req.body;
    const userExist = await User.findOne({email});
    if (userExist){
        throw new Error("User already exist")

    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = await User.create({
        fullname,
        email,password : hashedPassword,
    });
    res.status(201).json({
        status:"success",
        message:"user created succesfully",
        data:user
    })
})

