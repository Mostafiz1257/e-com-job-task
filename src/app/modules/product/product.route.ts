import express from 'express';
import { ProductController } from './product.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middleware/auth';

const router = express.Router();

// Route to fetch and save all products
router.get('/products', ProductController.fetchAndSaveAllProducts);

// Route to fetch product by ID
router.get('/products/:id', ProductController.fetchProductById);

export const ProductRouter = router;
