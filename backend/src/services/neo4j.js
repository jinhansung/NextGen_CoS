export const createCypherPrompt = (question) => {
  if (!question) {
    return "// Ask a question to generate Cypher";
  }

  return `// Example Cypher generated for: ${question}
MATCH (p:Person)-[:HAS_KNOWLEDGE]->(k:Knowledge)
RETURN p.name AS person, p.insightScore AS score, collect(k.topic) AS topics
ORDER BY score DESC
LIMIT 5;`;
};
