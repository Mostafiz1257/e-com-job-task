import { z } from 'zod';

const ProductValidationSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number(),
  quantity: z.number(),
  rating: z.number(),
  description: z.string(),
  image: z.string(),
});

export default ProductValidationSchema;
