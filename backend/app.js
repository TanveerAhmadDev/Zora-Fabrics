import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import ProductRouter from "./routes/products.Routes.js";
import CategoryRouter from "./routes/category.Routes.js";
import AuthRouter from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();



app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/api/product", ProductRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Hello from MVC Backend!");
});

app.use(errorHandler);

export default app;
