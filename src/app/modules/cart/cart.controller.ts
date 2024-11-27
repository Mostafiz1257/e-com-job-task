import catchAsync from "../../utils/catchAsync";


import { CartService } from "./cart.service";

// Get the user's current cart
const getUserCart = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const cart = await CartService.getUserCart(userId);
  res.status(200).json({
    success: true,
    message: 'Cart fetched successfully',
    data: cart,
  });
});

// Add a product to the cart
const addProductToCart = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  if (quantity <= 0) {
    throw new Error("Quantity must be grather than zero");
  }

  const updatedCart = await CartService.addProductToCart(userId, productId, quantity);
  res.status(200).json({
    success: true,
    message: 'Product added to cart successfully',
    data: updatedCart,
  });
});

// Update product quantity in the cart
const updateProductQuantity = catchAsync(async (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;

  if (quantity <= 0) {
    throw new Error("Quantity must be grather than zero");
  }

  const updatedCart = await CartService.updateProductQuantity(userId, productId, quantity);
  res.status(200).json({
    success: true,
    message: 'Product quantity updated successfully',
    data: updatedCart,
  });
});

// Remove a product from the cart
const removeProductFromCart = catchAsync(async (req, res) => {
  const { userId, productId } = req.params;

  const updatedCart = await CartService.removeProductFromCart(userId, productId);
  res.status(200).json({
    success: true,
    message: 'Product removed from cart successfully',
    data: updatedCart,
  });
});

export const CartController = {
  getUserCart,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
};
