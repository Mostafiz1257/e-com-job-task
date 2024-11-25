import express from 'express'
import { UserCollection } from './user.controller';


const router = express.Router();

router.post('/signup',UserCollection.createUser )

export const userRouter = router;