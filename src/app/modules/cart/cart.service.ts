import { Cart } from './cart.model';

const getUserCart = async (userId: string) => {
  const cart = await Cart.findOne({ user: userId }).populate('products.product');
  return cart || { user: userId, products: [] };
};

const addToCart = async (userId: string, productId: string, quantity: number) => {
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = new Cart({ user: userId, products: [] });
  }

  const existingProductIndex = cart.products.findIndex(
    (item) => item.product.toString() === productId
  );

  if (existingProductIndex > -1) {
    cart.products[existingProductIndex].quantity += quantity;
  } else {
    cart.products.push({ product: productId, quantity });
  }

  await cart.save();
  return cart;
};

const updateCartProduct = async (userId: string, productId: string, quantity: number) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) throw new Error('Cart not found');

  const productIndex = cart.products.findIndex((item) => item.product.toString() === productId);

  if (productIndex > -1) {
    cart.products[productIndex].quantity = quantity;
    await cart.save();
    return cart;
  } else {
    throw new Error('Product not found in cart');
  }
};

const removeFromCart = async (userId: string, productId: string) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) throw new Error('Cart not found');

  cart.products = cart.products.filter((item) => item.product.toString() !== productId);

  await cart.save();
  return cart;
};

export const CartService = {
  getUserCart,
  addToCart,
  updateCartProduct,
  removeFromCart,
};
