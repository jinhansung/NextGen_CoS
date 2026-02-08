import { useMemo, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";

const COLORS = {
  person: "#7d5cff",
  knowledge: "#2dffe3",
  signal: "#ff9f1c"
};

const interpolate = (start, end, progress) => start + (end - start) * progress;

const mergeSnapshots = (from, to, progress) => {
  const nodeMap = new Map();

  from.nodes.forEach((node) => nodeMap.set(node.id, { ...node }));
  to.nodes.forEach((node) => {
    if (!nodeMap.has(node.id)) {
      nodeMap.set(node.id, { ...node });
    } else {
      nodeMap.set(node.id, { ...nodeMap.get(node.id), ...node });
    }
  });

  const nodes = Array.from(nodeMap.values()).map((node) => {
    const start = from.nodes.find((n) => n.id === node.id);
    const end = to.nodes.find((n) => n.id === node.id);
    const startWeight = start?.weight ?? end?.weight ?? 0.5;
    const endWeight = end?.weight ?? start?.weight ?? 0.5;
    const weight = interpolate(startWeight, endWeight, progress);

    return {
      ...node,
      weight,
      activity: interpolate(start?.activity ?? 0.2, end?.activity ?? 0.2, progress)
    };
  });

  const links = progress < 0.5 ? from.links : to.links;
  return { nodes, links };
};

export default function GraphScene({ from, to, progress, showPublicOnly }) {
  const fgRef = useRef(null);
  const graphData = useMemo(() => mergeSnapshots(from, to, progress), [from, to, progress]);

  const filteredData = useMemo(() => {
    if (!showPublicOnly) {
      return graphData;
    }

    const publicNodeIds = new Set(
      graphData.nodes.filter((node) => node.visibility !== "private").map((node) => node.id)
    );

    return {
      nodes: graphData.nodes.filter((node) => publicNodeIds.has(node.id)),
      links: graphData.links.filter(
        (link) => publicNodeIds.has(link.source) && publicNodeIds.has(link.target)
      )
    };
  }, [graphData, showPublicOnly]);

  return (
    <section className="graph-shell">
      <div className="graph-overlay">
        <p>Temporal Morphing: {Math.round(progress * 100)}%</p>
        <p>Nodes: {filteredData.nodes.length}</p>
      </div>
      <ForceGraph3D
        ref={fgRef}
        graphData={filteredData}
        backgroundColor="#05070f"
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={(link) => 0.01 + link.weight * 0.05}
        nodeRelSize={4}
        nodeColor={(node) => COLORS[node.type] || "#ffffff"}
        nodeOpacity={0.85}
        linkColor={() => "rgba(62, 240, 255, 0.35)"}
        nodeLabel={(node) => `${node.label}\n${node.subtitle || ""}`}
        onNodeClick={(node) => {
          if (fgRef.current) {
            fgRef.current.cameraPosition(
              { x: node.x * 1.8, y: node.y * 1.8, z: node.z * 1.8 },
              node,
              1200
            );
          }
        }}
      />
    </section>
  );
}
