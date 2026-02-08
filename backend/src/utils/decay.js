const clamp = (value) => Math.max(0, Math.min(1, value));

export const applyDecay = (graph, days) => {
  if (!graph) {
    return { nodes: [], links: [] };
  }

  const decayFactor = clamp(1 - days * 0.02);
  const nodes = graph.nodes.map((node) => ({
    ...node,
    weight: node.weight ? clamp(node.weight * decayFactor) : node.weight
  }));

  const links = graph.links.map((link) => ({
    ...link,
    weight: link.weight ? clamp(link.weight * decayFactor) : link.weight
  }));

  return { ...graph, nodes, links };
};
