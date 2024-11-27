// assuming you have a Product model

import { Product } from "../product/product.model";
import { Cart } from "./cart.model";

// Fetch the current cart for a user
const getUserCart = async (userId: string) => {
  const cart = await Cart.findOne({ user: userId }).populate('items.productId');
  return cart || { items: [] }; // Return an empty cart if none exists
};

// Add a product to the cart
const addProductToCart = async (userId: string, productId: string, quantity: number) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error('Product not found');

  let cart = await Cart.findOne({ user: userId });
  
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  const existingItem = cart.items.find(item => item.productId.toString() === productId);
  if (existingItem) {
    existingItem.quantity += quantity; // If product exists, update quantity
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  return cart;
};

// Update product quantity in the cart
const updateProductQuantity = async (userId: string, productId: string, quantity: number) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error('Cart not found');

  const cartItem = cart.items.find(item => item.productId.toString() === productId);
  if (!cartItem) throw new Error('Product not found in cart');
  
  if (quantity <= 0) {
    throw new Error('Quantity must be greater than zero');
  }

  cartItem.quantity = quantity;
  await cart.save();
  return cart;
};

// Remove product from the cart
const removeProductFromCart = async (userId: string, productId: string) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error('Cart not found');

  cart.items = cart.items.filter(item => item.productId.toString() !== productId);
  await cart.save();
  return cart;
};

export const CartService = {
  getUserCart,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
};
