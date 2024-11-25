import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { AuthRoutes } from './app/modules/auth/auth.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());


app.use('/api', AuthRoutes);


const getAController = (req: Request, res: Response) => {
  res.send('Mechanical keyboard project backend server is running');
};
app.get('/', getAController);

console.log(process.cwd());
export default app;
