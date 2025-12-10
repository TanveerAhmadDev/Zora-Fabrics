import express from "express";
import { adminLogin, adminRegister } from "../controllers/Auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/adminregister", adminRegister);
AuthRouter.post("/adminlogin", adminLogin);

export default AuthRouter;
