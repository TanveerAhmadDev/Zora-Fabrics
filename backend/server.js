import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import ProductRouter from "./routes/Products.Routes.js";
import CategoryRouter from "./routes/Category.Routes.js";
import AuthRouter from "./routes/Auth.Routes.js";
import { errorHandler } from "./middlewaress/errorHandler.js";
// import dbConnect from "./config/dbConnect.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// dbConnect();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

let dbConnected = false;

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    dbConnected = true;
    console.log("DB is Connected");
  } catch (error) {
    console.log("DB is Not Connected", error);
  }
}

app.use((req, res, next) => {
  if (!dbConnected) {
    dbConnect();
  }
  next();
});

app.use("/api/product", ProductRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Hello from MVC Backend!");
});

app.use(errorHandler);

module.exports = app;
