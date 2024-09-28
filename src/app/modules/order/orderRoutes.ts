import { Router } from "express";
import makePaymentController from "./orderController";

const router = Router()


router.post('/', makePaymentController)

export const paymentRoutes = router;