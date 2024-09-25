import { Request, Response } from 'express';
import ProductValidationSchema from './product.validation';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedProduct = ProductValidationSchema.parse(req.body);
    const newProduct = await productServices.createProduct(validatedProduct);
    res
      .status(201)
      .json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productServices.getProducts();
    res
      .status(200)
      .json({ message: 'Products retrieved successfully', products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const product = await productServices.getProductById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res
      .status(200)
      .json({ message: 'Product retrieved successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const validatedProduct = ProductValidationSchema.partial().parse(req.body);
    const updatedProduct = await productServices.updateProduct(
      req.params.productId,
      validatedProduct,
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res
      .status(200)
      .json({
        message: 'Product updated successfully',
        product: updatedProduct,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await productServices.deleteProduct(
      req.params.productId,
    );
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res
      .status(200)
      .json({
        message: 'Product deleted successfully',
        product: deletedProduct,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFeaturedProducts = async (req: Request, res: Response) => {
  try {
    const featuredProducts = await productServices.getFeaturedProducts();
    res
      .status(200)
      .json({
        message: 'Featured products retrieved successfully',
        products: featuredProducts,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchAndFilterProducts = async (req: Request, res: Response) => {
  try {
    const { searchQuery, filters } = req.body;
    const products = await productServices.searchAndFilterProducts(
      searchQuery,
      filters,
    );
    res
      .status(200)
      .json({ message: 'Products retrieved successfully', products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const decreaseProductQuantity = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("id",id);
  const { quantity } = req.body;
console.log("body",req.body);
  const updatedProduct = await productServices.decreaseProductQuantity(
    id,
    quantity,
  );

  if (!updatedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res
      .status(200)
      .json({
        message: 'Product decrease successfully',
        product: updatedProduct,
      });

};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  searchAndFilterProducts,
  decreaseProductQuantity,
};
