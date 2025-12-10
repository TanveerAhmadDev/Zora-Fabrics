import express from "express";
import {
  AllCategorys,
  createCategory,
} from "../controllers/category.controller.js";

const CategoryRouter = express.Router();

CategoryRouter.post("/create-category", createCategory);
CategoryRouter.get("/categorys", AllCategorys);

export default CategoryRouter;
