import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    Images: [
      {
        type: String,
      },
    ],
    ProductDetails: {
      Attribute: {
        type: String,
      },
    },
    ProductPriceWithOutSale: {
      type: Number,
    },
    ProductPriceWithSale: {
      type: Number,
    },
    Price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
