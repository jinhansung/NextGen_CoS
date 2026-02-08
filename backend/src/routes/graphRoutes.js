import { Router } from "express";
import { getGraphSnapshot, listSnapshots } from "../services/snapshotService.js";
import { calculateInsightScores } from "../services/insightScore.js";
import { applyDecay } from "../utils/decay.js";

const router = Router();

router.get("/snapshots", (req, res) => {
  res.json({ snapshots: listSnapshots() });
});

router.get("/snapshot/:label", (req, res) => {
  const snapshot = getGraphSnapshot(req.params.label);
  res.json(snapshot);
});

router.post("/insight-score", (req, res) => {
  const graph = req.body.graph;
  const scored = calculateInsightScores(graph);
  res.json(scored);
});

router.post("/decay", (req, res) => {
  const { graph, days = 7 } = req.body;
  res.json(applyDecay(graph, days));
});

export default router;
