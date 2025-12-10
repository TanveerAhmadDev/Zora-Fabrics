import CategoryModel from "../models/Category.model.js";
import AsyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
export const createCategory = AsyncHandler(async (req, res) => {
  const { CategoryName } = req.body;

  if (!CategoryName) {
    throw new ApiError(403, "Category name is required");
  }

  const checkingCategory = await CategoryModel.findOne({ CategoryName });

  if (checkingCategory) {
    throw new ApiError(403, "Already Exsit");
  }

  const CreateCategory = await CategoryModel.create({ CategoryName });

  const response = new ApiResponse(200, "Category is created", {
    CreateCategory,
  });

  res.status(response.statusCode).json(response);
});

export const AllCategorys = AsyncHandler(async (req, res) => {
  const Categorys = await CategoryModel.find();

  const response = new ApiResponse(200, "Categorys", { Categorys });

  res.status(response.statusCode).json(response);
});
