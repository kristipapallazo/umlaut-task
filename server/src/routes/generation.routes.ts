import { Router, Request, Response } from "express";
import { generateSQLQuery, generateVariations } from "../util/generation";

const generateRoutes = Router();

generateRoutes.post("variations", (req: Request, res: Response) => {
  const name = req.body?.name;

  if (!name || name === "")
    res.json({ error: true, message: "Error: Name does not exist or empty!" });

  const variations = generateVariations(name);
  res.json({ data: { variations } });
});

generateRoutes.post("sql-query", (req: Request, res: Response) => {
  const name = req.body?.name;

  if (!name || name === "")
    res.json({ error: true, message: "Error: Name does not exist or empty!" });

  const query = generateSQLQuery(name);
  res.json({ data: { query } });
});

export default generateRoutes;
