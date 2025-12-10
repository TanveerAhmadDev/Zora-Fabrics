import AdminModel from "../models/Admin.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import AsyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminRegister = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const EmailChecking = await AdminModel.findOne({ email });

  if (EmailChecking) {
    throw new ApiError(403, "Email is Already use");
  }

  const HashPassword = await bcrypt.hash(password, 10);

  const Admin = await AdminModel.create({
    name,
    email,
    password: HashPassword,
  });

  const response = new ApiResponse(200, "Admin Created", { Admin });

  res.status(response.statusCode).json(response);
});

export const adminLogin = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await AdminModel.findOne({ email });

  if (!admin) {
    throw new ApiError(403, "Invliad Credentails");
  }
  const PasswordChecking = await bcrypt.compare(password, admin.password);

  if (!PasswordChecking) {
    throw new ApiError(403, "Incorrect Password");
  }

  const id = admin._id;

  const Token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRETE);

  res.cookie("AccessToken", Token, {
    expiresIn: "1d",
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  const response = new ApiResponse(200, "Admin Log-in Done", { admin });

  res.status(response.statusCode).json(response);
});
