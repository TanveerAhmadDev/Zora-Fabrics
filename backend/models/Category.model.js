import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    CategoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;
