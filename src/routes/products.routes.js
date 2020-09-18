import { Router } from "express";
const router = Router();

import * as productControllers from "../controllers/products.controller"; //Importo todas las funciones que tengo en ese controlador

router.post("/", productControllers.createProduct);

router.get("/", productControllers.getProduct);

router.get("/:productId", productControllers.getProductById);

router.put("/:productId", productControllers.updateProductById);

router.delete("/:productId", productControllers.deleteProductById);

export default router;
