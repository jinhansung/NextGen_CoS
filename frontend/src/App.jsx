import { useMemo, useState } from "react";
import GraphScene from "./components/GraphScene.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import VoiceConsole from "./components/VoiceConsole.jsx";
import { getSnapshotPair } from "./data/sampleSnapshots.js";

const SNAPSHOT_OPTIONS = ["Today", "Yesterday", "Last Week"];

export default function App() {
  const [activeSnapshot, setActiveSnapshot] = useState("Today");
  const [morphProgress, setMorphProgress] = useState(0.35);
  const [showPublicOnly, setShowPublicOnly] = useState(true);

  const { from, to } = useMemo(
    () => getSnapshotPair(activeSnapshot),
    [activeSnapshot]
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">AI Chief of Staff</p>
          <h1>NextGen CoS Intelligence Graph</h1>
          <p className="subtitle">
            Navigate people, signals, and knowledge in a cyber-grid 3D space.
          </p>
        </div>
        <div className="status-chip">
          <span className="pulse" />
          Live Insight Stream
        </div>
      </header>
      <main className="app-main">
        <GraphScene
          from={from}
          to={to}
          progress={morphProgress}
          showPublicOnly={showPublicOnly}
        />
        <aside className="side-panel">
          <ControlPanel
            snapshots={SNAPSHOT_OPTIONS}
            activeSnapshot={activeSnapshot}
            morphProgress={morphProgress}
            showPublicOnly={showPublicOnly}
            onSnapshotChange={setActiveSnapshot}
            onMorphChange={setMorphProgress}
            onTogglePublic={setShowPublicOnly}
          />
          <VoiceConsole />
        </aside>
      </main>
    </div>
  );
}
