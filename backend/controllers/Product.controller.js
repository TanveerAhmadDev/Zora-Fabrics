import ProductModel from "../models/Product.model.js";
import CategoryModel from "../models/Category.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import AsyncHandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const addProduct = AsyncHandler(async (req, res, next) => {
  const {
    ProductName,
    Category,
    ProductPriceWithOutSale,
    ProductPriceWithSale,
    Attribute,
  } = req.body;

  if (!ProductName || !Category) {
    throw new ApiError(403, "Both Fileds are required");
  }

  const findCategory = await CategoryModel.findOne({ CategoryName: Category });

  const frontImage = req.files["front_image"]?.[0];
  const sideImage = req.files["side_image"]?.[0];
  const backsideImage = req.files["backside_image"]?.[0];
  const designCloseUp = req.files["design_close_up"]?.[0];
  const workingCloseUp = req.files["working_close_up"]?.[0];

  if (!frontImage) {
    throw new ApiError(403, "Front Image is Required");
  }

  const frontImageUrl = frontImage
    ? await uploadOnCloudinary(frontImage.path)
    : null;
  const sideImageUrl = sideImage
    ? await uploadOnCloudinary(sideImage.path)
    : null;
  const backsideImageUrl = backsideImage
    ? await uploadOnCloudinary(backsideImage.path)
    : null;
  const designCloseUpUrl = designCloseUp
    ? await uploadOnCloudinary(designCloseUp.path)
    : null;
  const workingCloseUpUrl = workingCloseUp
    ? await uploadOnCloudinary(workingCloseUp.path)
    : null;

  const Categoryid = findCategory._id;

  console.log("Error Is After this");
  console.log(frontImageUrl);

  const Product = await ProductModel.create({
    ProductName,
    Category: Categoryid,
    Images: [
      frontImageUrl?.url || "",
      sideImageUrl?.url || "",
      backsideImageUrl?.url || "",
      designCloseUpUrl?.url || "",
      workingCloseUpUrl?.url || "",
    ],
    ProductPriceWithOutSale,
    ProductPriceWithSale,
    Price: ProductPriceWithSale,
    ProductDetails: { Attribute },
  });

  const response = new ApiResponse(200, "Till now everything is okay", {
    Product,
  });

  res.status(response.statusCode).json(response);
});

export const getAllProducts = AsyncHandler(async (req, res, next) => {
  const Products = await ProductModel.find().populate("Category");

  const response = new ApiResponse(200, "Products", { Products });

  res.status(response.statusCode).json(response);
});

export const getProductsByCategory = AsyncHandler(async (req, res) => {
  const { CategoryName } = req.query;

  console.log(CategoryName);

  const FindCategory = await CategoryModel.findOne({ CategoryName });

  if (!FindCategory) {
    throw new ApiError(403, "Category not Find");
  }

  const Categoryid = FindCategory._id;

  const Products = await ProductModel.find({ Category: Categoryid });

  const response = new ApiResponse(200, "All okay go forward", {
    Products,
  });

  res.status(response.statusCode).json(response);
});

export const ProductDetails = AsyncHandler(async (req, res) => {
  const { ProductId } = req.params;

  const Product = await ProductModel.findOne({ _id: ProductId });

  const response = new ApiResponse(200, "Product Detailes", { Product });

  res.status(response.statusCode).json(response);
});
