import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { paymentRoutes } from './app/modules/order/orderRoutes';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());


app.use('/api/products', ProductRoutes);
app.use('/api/create-checkout-session',paymentRoutes)


const getAController = (req: Request, res: Response) => {
  res.send('Mechanical keyboard project backend server is running');
};
app.get('/', getAController);

console.log(process.cwd());
export default app;
