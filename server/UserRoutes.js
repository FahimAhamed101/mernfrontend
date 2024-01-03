import express from "express"

import { registerUser } from "./UserCtrjs.js"

const userRoutes = express.Router()

userRoutes.post('/register',registerUser)


export default userRoutes