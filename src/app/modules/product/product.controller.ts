import catchAsync from '../../utils/catchAsync';
import { ProductService } from './product.service';

const getAllProducts = catchAsync(async (req, res) => {
  const products = await ProductService.fetchAllProducts();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Products fetched successfully',
    data: products,
  });
});

const getProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await ProductService.fetchProductById(id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: `Product ${id} fetched successfully`,
    data: product,
  });
});

export const ProductController = {
  getAllProducts,
  getProductById,
};
