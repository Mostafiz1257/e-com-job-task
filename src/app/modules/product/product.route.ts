import express from 'express';
import { productController } from './product.controller';
// import { productController } from '../controllers/productController';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getSingleProduct);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);
router.get('/featured', productController.getFeaturedProducts);
router.post('/search', productController.searchAndFilterProducts);

export const ProductRoutes = router;
