// controllers/product.controller.ts
import catchAsync from "../../utils/catchAsync";
import { ProductSummary } from "./product.interface";
import { ProductService } from "./product.service";


// Controller to fetch all products and save them in the database
const fetchAndSaveAllProducts = catchAsync(async (req, res) => {
  const products: ProductSummary[] = await ProductService.fetchAndSaveAllProducts();
  res.status(200).json({
    success: true,
    message: 'Products fetched and saved successfully',
    data: products,
  });
});
// Controller to fetch a single product by ID
const fetchProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await ProductService.fetchProductById(Number(id));
  res.status(200).json({
    success: true,
    data: product,
  });
});

export const ProductController = {
  fetchAndSaveAllProducts,
  fetchProductById,
};
