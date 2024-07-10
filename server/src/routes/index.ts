import { Router } from "express";
import convRoutes from "./convertion.routes";
import generateRoutes from "./generation.routes";

const router = Router();

router.use("convert", convRoutes);
router.use("generate", generateRoutes);
router.use("all-items-generation", generateRoutes);

export default router;
