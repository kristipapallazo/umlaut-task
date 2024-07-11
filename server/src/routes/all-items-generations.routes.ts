import { Router, Request, Response } from "express";
// import { handleUmlautConvertion } from "../util/convertion";
import { Results } from "../types";
import { handleAllItemsGeneration } from "../util/all-items-generation";

const allItemsGenerationRoutes = Router();

allItemsGenerationRoutes.post("/", async (req: Request, res: Response) => {
  const items = req.body?.items;
  if (!items || !Array.isArray(items) || items.length === 0) {
    res.json({
      error: true,
      message: "Error: Items does not exist, is empty or configured correctly!",
    });
    return;
  }
  const results: Results = await handleAllItemsGeneration(items);

  res.json({ data: { results } });
});

export default allItemsGenerationRoutes;
