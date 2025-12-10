import express, { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getProductsByCategory,
  ProductDetails,
} from "../controllers/Product.controller.js";
import upload from "../middlewares/Muler.js";

const ProductRouter = express.Router();

ProductRouter.post(
  "/create-product",

  // upload.single("image"),
  upload.fields([
    { name: "front_image", maxCount: 1 },
    { name: "side_image", maxCount: 1 },
    { name: "backside_image", maxCount: 1 },
    { name: "design_close_up", maxCount: 1 },
    { name: "working_close_up", maxCount: 1 },
  ]),
  addProduct
);
ProductRouter.get("/getallproducts", getAllProducts);
ProductRouter.get("/getproductsbycategory", getProductsByCategory);
ProductRouter.get("/productdetail/:ProductId", ProductDetails);

export default ProductRouter;
