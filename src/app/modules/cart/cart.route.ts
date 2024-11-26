import express from 'express';
import { CartController } from './cart.controller';
import { authenticate } from '../../middleware/authenticate'; // Middleware for JWT auth

const router = express.Router();

router.use(authenticate);

// Route to fetch the user's cart
router.get('/user', CartController.getCart);

// Route to add a product to the cart
router.post('/user', CartController.addToCart);

// Route to update a product's quantity in the cart
router.put('/user', CartController.updateCart);

// Route to remove a product from the cart
router.delete('/user', CartController.removeFromCart);

export const CartRouter = router;
