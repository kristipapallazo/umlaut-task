import { Router, Request, Response } from "express";
import { handleUmlautConvertion } from "../util/convertion";

const convRoutes = Router();

convRoutes.post("/", (req: Request, res: Response) => {
  const name = req.body?.name;
  if (!name || name === "")
    res.json({ error: true, message: "Error: Name does not exist or empty!" });
  const converted = handleUmlautConvertion(name);
  res.json({ data: { converted } });
});

export default convRoutes;
