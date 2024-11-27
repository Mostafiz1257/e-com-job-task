import express from 'express';
import { CartController } from './cart.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';


const router = express.Router();

// Get the user's cart
router.get('/carts/user/:userId',auth(USER_ROLE.user), CartController.getUserCart);

// Add a product to the cart
router.post('/carts/user/:userId',auth(USER_ROLE.user), CartController.addProductToCart);

// Update product quantity in the cart
router.put('/carts/user/:userId/:productId',auth(USER_ROLE.user), CartController.updateProductQuantity);

// Remove a product from the cart
router.delete('/carts/user/:userId/:productId',auth(USER_ROLE.user), CartController.removeProductFromCart);

export const CartRouter = router;
