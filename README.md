# NextGen CoS
AI-based Chief of Staff platform that models organizational intelligence as a living graph.

## Overview
The AI CoS connects people, signals, and knowledge into a navigable 3D graph. The MVP focuses on visibility, insight scoring, temporal snapshots, and a conversational interface placeholder for Eleven Labs voice.

## Monorepo Layout
- `frontend/`: React + Vite 3D graph experience (react-force-graph-3d).
- `backend/`: Node.js + Express API for graph data, insight scoring, and temporal snapshots.

## Local Development
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Environment Variables (Backend)
- `NEO4J_URI` (optional)
- `NEO4J_USER` (optional)
- `NEO4J_PASSWORD` (optional)
- `PORT` (default: 3001)

## Notes
- The backend serves sample data by default to keep the MVP self-contained.
- The frontend includes UI placeholders for voice navigation and text-to-Cypher workflows.
