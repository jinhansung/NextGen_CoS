import { Router } from "express";
import { createCypherPrompt } from "../services/neo4j.js";

const router = Router();

router.post("/query", async (req, res) => {
  const { question } = req.body;
  const cypher = createCypherPrompt(question);

  res.json({
    message: "This is a placeholder response. Wire an LLM to execute the query.",
    cypher,
    question
  });
});

export default router;
