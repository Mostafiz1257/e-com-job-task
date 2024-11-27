import express from 'express';
import { CartController } from './cart.controller';


const router = express.Router();

// Get the user's cart
router.get('/carts/user/:userId', CartController.getUserCart);

// Add a product to the cart
router.post('/carts/user/:userId', CartController.addProductToCart);

// Update product quantity in the cart
router.put('/carts/user/:userId/:productId', CartController.updateProductQuantity);

// Remove a product from the cart
router.delete('/carts/user/:userId/:productId', CartController.removeProductFromCart);

export const CartRouter = router;
