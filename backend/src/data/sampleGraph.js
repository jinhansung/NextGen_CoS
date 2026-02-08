export const SAMPLE_SNAPSHOTS = {
  Today: {
    nodes: [
      {
        id: "person-1",
        type: "person",
        name: "Alex Rivera",
        role: "Head of Product",
        insightScore: 0.92,
        quality: 0.9,
        reusability: 0.8,
        recency: 0.7
      },
      {
        id: "person-2",
        type: "person",
        name: "Maya Singh",
        role: "Data Systems",
        insightScore: 0.78,
        quality: 0.8,
        reusability: 0.7,
        recency: 0.6
      },
      {
        id: "knowledge-1",
        type: "knowledge",
        topic: "Roadmap Intelligence",
        description: "Q4 narratives and outcomes",
        weight: 0.82,
        createdAt: "2024-07-16T12:00:00Z"
      },
      {
        id: "knowledge-2",
        type: "knowledge",
        topic: "Latency Reduction",
        description: "Service mesh optimizations",
        weight: 0.58,
        createdAt: "2024-07-14T08:30:00Z"
      },
      {
        id: "signal-1",
        type: "signal",
        signalType: "Summary",
        source: "Board Memo",
        content: "Weekly summary of progress",
        public: true
      }
    ],
    links: [
      { source: "person-1", target: "knowledge-1", type: "HAS_KNOWLEDGE", weight: 0.8 },
      { source: "person-2", target: "knowledge-2", type: "HAS_KNOWLEDGE", weight: 0.6 },
      { source: "signal-1", target: "knowledge-1", type: "CONTRIBUTES_TO", weight: 0.4 }
    ]
  },
  Yesterday: {
    nodes: [
      {
        id: "person-1",
        type: "person",
        name: "Alex Rivera",
        role: "Head of Product",
        insightScore: 0.89,
        quality: 0.85,
        reusability: 0.78,
        recency: 0.55
      },
      {
        id: "knowledge-3",
        type: "knowledge",
        topic: "Org Design",
        description: "Staffing topology",
        weight: 0.5,
        createdAt: "2024-07-13T10:15:00Z"
      },
      {
        id: "signal-2",
        type: "signal",
        signalType: "Commit",
        source: "GitHub",
        content: "Incident patch rollout",
        public: true
      }
    ],
    links: [
      { source: "person-1", target: "knowledge-3", type: "HAS_KNOWLEDGE", weight: 0.5 },
      { source: "signal-2", target: "knowledge-3", type: "CONTRIBUTES_TO", weight: 0.3 }
    ]
  }
};
