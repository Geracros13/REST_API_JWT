import { Router } from "express";
const router = Router();

import * as authControllers from "../controllers/auth.controller";

router.post("/signUp", authControllers.signUp);
router.post("/signIn", authControllers.signIn);

export default router;
