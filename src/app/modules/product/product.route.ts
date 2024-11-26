import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// Route to fetch all products
router.get('/', ProductController.getAllProducts);

// Route to fetch product details by ID
router.get('/:id', ProductController.getProductById);

export const ProductRouter = router;
