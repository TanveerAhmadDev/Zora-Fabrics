import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (locafilePath) => {
  try {
    const response = await cloudinary.uploader.upload(locafilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(locafilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(locafilePath);
    return null;
  }
};

export default uploadOnCloudinary;
