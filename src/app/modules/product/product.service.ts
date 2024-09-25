
import { TProduct } from './product.interface';
import Product from './product.model'
// Get all products
export const getProducts = async (): Promise<TProduct[]> => {
  return await Product.find();
};

// Create a new product
export const createProduct = async (productData: TProduct): Promise<TProduct> => {
  const newProduct = new Product(productData);
  return await newProduct.save();
};

// Get a product by ID
export const getProductById = async (productId: string): Promise<TProduct | null> => {
  return await Product.findById(productId).exec();
};

// Update a product
export const updateProduct = async (productId: string, productData: Partial<TProduct>): Promise<TProduct | null> => {
  return await Product.findByIdAndUpdate(productId, productData, { new: true }).exec();
};

// Delete a product
export const deleteProduct = async (productId: string): Promise<TProduct | null> => {
  return await Product.findByIdAndDelete(productId).exec();
};


export const getFeaturedProducts = async (): Promise<TProduct[]> => {
  return await Product.find().sort({ createdAt: -1 }).limit(6).exec();
};


export const searchAndFilterProducts = async (searchQuery: string, filters: any): Promise<TProduct[]> => {
  const query = {
    name: new RegExp(searchQuery, 'i'),
    ...filters,
  };
  return await Product.find(query).exec();
};


const decreaseProductQuantity = async (id: string, quantity: number) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { $inc: { quantity: -quantity } },
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  return updatedProduct;
};




export const productServices = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  searchAndFilterProducts,
  decreaseProductQuantity
};
