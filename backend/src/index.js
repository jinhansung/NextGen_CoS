import express from "express";
import cors from "cors";
import graphRoutes from "./routes/graphRoutes.js";
import voiceRoutes from "./routes/voiceRoutes.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "NextGen CoS API online" });
});

app.use("/api/graph", graphRoutes);
app.use("/api/voice", voiceRoutes);

app.listen(port, () => {
  console.log(`NextGen CoS backend listening on ${port}`);
});
