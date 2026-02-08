export default function ControlPanel({
  snapshots,
  activeSnapshot,
  morphProgress,
  showPublicOnly,
  onSnapshotChange,
  onMorphChange,
  onTogglePublic
}) {
  return (
    <section className="panel">
      <h2>Graph Controls</h2>
      <div className="panel-section">
        <label className="label">Snapshot</label>
        <div className="chip-row">
          {snapshots.map((snapshot) => (
            <button
              type="button"
              key={snapshot}
              className={`chip ${snapshot === activeSnapshot ? "chip-active" : ""}`}
              onClick={() => onSnapshotChange(snapshot)}
            >
              {snapshot}
            </button>
          ))}
        </div>
      </div>

      <div className="panel-section">
        <label className="label">Temporal Morphing</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={morphProgress}
          onChange={(event) => onMorphChange(Number(event.target.value))}
        />
        <div className="range-values">
          <span>Past</span>
          <span>Present</span>
        </div>
      </div>

      <div className="panel-section">
        <label className="toggle">
          <input
            type="checkbox"
            checked={showPublicOnly}
            onChange={(event) => onTogglePublic(event.target.checked)}
          />
          <span>Public-only signals</span>
        </label>
      </div>

      <div className="panel-section insight">
        <h3>Insight Scoring</h3>
        <ul>
          <li>Quality weight: 0.5</li>
          <li>Reusability weight: 0.3</li>
          <li>Recency boost: 0.2</li>
        </ul>
      </div>
    </section>
  );
}
