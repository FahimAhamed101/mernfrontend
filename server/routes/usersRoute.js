import exppress from "express";
import {
  registerUserCtrl,
  loginUserCtrl,

} from "../controllers/usersCtrl.js";


const userRoutes = exppress.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);

export default userRoutes;