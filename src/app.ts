import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { AuthRouter } from './app/modules/auth/auth.route';
import { userRouter } from './app/modules/user/user.route';
import { ProductRouter } from './app/modules/product/product.route';
import { CartRouter } from './app/modules/cart/cart.router';


const app: Application = express();

//parser
app.use(express.json());
app.use(cors({origin:['http://localhost:5173'], credentials:true}));


app.use('/api', AuthRouter);
app.use('/api', userRouter);
app.use('/api', ProductRouter);
app.use('/api', CartRouter);

const getAController = (req: Request, res: Response) => {
  res.send('Mechanical keyboard project backend server is running');
};
app.get('/', getAController);

console.log(process.cwd());
export default app;
