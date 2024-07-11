import { Router } from "express";
import convRoutes from "./convertion.routes";
import generateRoutes from "./generation.routes";
import allItemsGenerationRoutes from "./all-items-generations.routes";

const router = Router();

router.use("/convert", convRoutes);
router.use("/generate", generateRoutes);
router.use("/all-items-generation", allItemsGenerationRoutes);

export default router;
