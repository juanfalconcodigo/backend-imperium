import { Router } from "express";
require('express-async-errors');
import { HelpRouter, CustomerRouter,UserRouter,AuthRouter } from "./index.route";

const router = Router();

router.use("/help", HelpRouter);
router.use("/customer", CustomerRouter);
router.use('/auth',AuthRouter);
router.use('/user',UserRouter);

export default router;
