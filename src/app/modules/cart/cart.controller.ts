import catchAsync from '../../utils/catchAsync';
import { CartService } from './cart.service';

const getCart = catchAsync(async (req, res) => {
  const userId = req.user._id; // Assumes authentication middleware adds `req.user`
  const cart = await CartService.getUserCart(userId);
  res.status(200).json({
    success: true,
    message: 'Cart fetched successfully',
    data: cart,
  });
});

const addToCart = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;

  const cart = await CartService.addToCart(userId, productId, quantity);
  res.status(200).json({
    success: true,
    message: 'Product added to cart successfully',
    data: cart,
  });
});

const updateCart = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;

  const cart = await CartService.updateCartProduct(userId, productId, quantity);
  res.status(200).json({
    success: true,
    message: 'Cart updated successfully',
    data: cart,
  });
});

const removeFromCart = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.body;

  const cart = await CartService.removeFromCart(userId, productId);
  res.status(200).json({
    success: true,
    message: 'Product removed from cart successfully',
    data: cart,
  });
});

export const CartController = {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
};
