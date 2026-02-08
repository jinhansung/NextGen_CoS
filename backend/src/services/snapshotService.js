import { SAMPLE_SNAPSHOTS } from "../data/sampleGraph.js";

export const listSnapshots = () => Object.keys(SAMPLE_SNAPSHOTS);

export const getGraphSnapshot = (label) => {
  return SAMPLE_SNAPSHOTS[label] || SAMPLE_SNAPSHOTS.Today;
};
