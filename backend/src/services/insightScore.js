const DEFAULT_WEIGHTS = {
  quality: 0.5,
  reusability: 0.3,
  recency: 0.2
};

const normalize = (value) => Math.max(0, Math.min(1, value));

export const calculateInsightScores = (graph, weights = DEFAULT_WEIGHTS) => {
  if (!graph) {
    return { nodes: [], links: [] };
  }

  const nodes = graph.nodes.map((node) => {
    if (node.type !== "person") {
      return node;
    }

    const quality = normalize(node.quality ?? 0.7);
    const reusability = normalize(node.reusability ?? 0.6);
    const recency = normalize(node.recency ?? 0.5);

    const score =
      quality * weights.quality +
      reusability * weights.reusability +
      recency * weights.recency;

    return {
      ...node,
      insightScore: Number(score.toFixed(3))
    };
  });

  return { ...graph, nodes };
};
