const TODAY = {
  nodes: [
    {
      id: "person-1",
      type: "person",
      label: "Alex Rivera",
      subtitle: "Head of Product",
      weight: 0.95,
      activity: 0.8,
      visibility: "public"
    },
    {
      id: "person-2",
      type: "person",
      label: "Maya Singh",
      subtitle: "Data Systems",
      weight: 0.75,
      activity: 0.65,
      visibility: "public"
    },
    {
      id: "knowledge-1",
      type: "knowledge",
      label: "Roadmap Intelligence",
      subtitle: "Q4 strategic narratives",
      weight: 0.82,
      activity: 0.6,
      visibility: "public"
    },
    {
      id: "knowledge-2",
      type: "knowledge",
      label: "Latency Reduction",
      subtitle: "Service mesh insights",
      weight: 0.58,
      activity: 0.4,
      visibility: "public"
    },
    {
      id: "signal-1",
      type: "signal",
      label: "Board Memo",
      subtitle: "Weekly summary",
      weight: 0.7,
      activity: 0.5,
      visibility: "public"
    },
    {
      id: "signal-2",
      type: "signal",
      label: "Private Deal Review",
      subtitle: "Restricted",
      weight: 0.4,
      activity: 0.3,
      visibility: "private"
    }
  ],
  links: [
    { source: "person-1", target: "knowledge-1", weight: 0.8 },
    { source: "person-2", target: "knowledge-2", weight: 0.6 },
    { source: "signal-1", target: "knowledge-1", weight: 0.5 },
    { source: "signal-2", target: "knowledge-2", weight: 0.4 }
  ]
};

const YESTERDAY = {
  nodes: [
    {
      id: "person-1",
      type: "person",
      label: "Alex Rivera",
      subtitle: "Head of Product",
      weight: 0.9,
      activity: 0.65,
      visibility: "public"
    },
    {
      id: "person-2",
      type: "person",
      label: "Maya Singh",
      subtitle: "Data Systems",
      weight: 0.7,
      activity: 0.5,
      visibility: "public"
    },
    {
      id: "knowledge-1",
      type: "knowledge",
      label: "Roadmap Intelligence",
      subtitle: "Q4 strategic narratives",
      weight: 0.75,
      activity: 0.55,
      visibility: "public"
    },
    {
      id: "knowledge-3",
      type: "knowledge",
      label: "Org Design",
      subtitle: "Staffing patterns",
      weight: 0.5,
      activity: 0.35,
      visibility: "public"
    },
    {
      id: "signal-1",
      type: "signal",
      label: "Board Memo",
      subtitle: "Weekly summary",
      weight: 0.6,
      activity: 0.4,
      visibility: "public"
    }
  ],
  links: [
    { source: "person-1", target: "knowledge-1", weight: 0.7 },
    { source: "person-2", target: "knowledge-3", weight: 0.5 },
    { source: "signal-1", target: "knowledge-1", weight: 0.4 }
  ]
};

const LAST_WEEK = {
  nodes: [
    {
      id: "person-1",
      type: "person",
      label: "Alex Rivera",
      subtitle: "Head of Product",
      weight: 0.85,
      activity: 0.5,
      visibility: "public"
    },
    {
      id: "person-3",
      type: "person",
      label: "Kai Moreno",
      subtitle: "Security Lead",
      weight: 0.6,
      activity: 0.45,
      visibility: "public"
    },
    {
      id: "knowledge-4",
      type: "knowledge",
      label: "Incident Review",
      subtitle: "Post-mortem 48A",
      weight: 0.55,
      activity: 0.4,
      visibility: "public"
    },
    {
      id: "signal-3",
      type: "signal",
      label: "Pager Alert",
      subtitle: "Downtime notice",
      weight: 0.5,
      activity: 0.4,
      visibility: "public"
    }
  ],
  links: [
    { source: "person-3", target: "knowledge-4", weight: 0.5 },
    { source: "signal-3", target: "knowledge-4", weight: 0.4 }
  ]
};

const SNAPSHOTS = {
  Today: TODAY,
  Yesterday: YESTERDAY,
  "Last Week": LAST_WEEK
};

export const getSnapshotPair = (label) => {
  const to = SNAPSHOTS[label] || TODAY;
  const from = SNAPSHOTS[label === "Today" ? "Yesterday" : "Today"] || TODAY;
  return { from, to };
};
