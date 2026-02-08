import { useState } from "react";
import { requestVoiceAnswer } from "../services/api.js";

export default function VoiceConsole() {
  const [status, setStatus] = useState("Idle");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("Awaiting input.");
  const elevenLabsKey = import.meta.env.VITE_ELEVEN_LABS_KEY?.trim();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() || "http://localhost:3001";
  const elevenLabsStatus = elevenLabsKey ? "Configured" : "Missing";

  const handleAsk = async () => {
    if (!question) {
      return;
    }

    setStatus("Thinking...");
    const answer = await requestVoiceAnswer(question);
    setResponse(answer.message);
    setStatus("Ready");
  };

  return (
    <section className="panel voice">
      <div className="voice-header">
        <h2>Voice Navigator</h2>
        <span className="voice-status">{status}</span>
      </div>
      <p className="voice-description">
        Push-to-talk placeholder for Eleven Labs integration. Ask a question and the
        AI will translate it into a Cypher query.
      </p>
      <div className="voice-meta">
        <p>
          <strong>Eleven Labs:</strong> {elevenLabsStatus}
        </p>
        <p>
          <strong>API:</strong> {apiBaseUrl}
        </p>
      </div>
      <textarea
        rows="3"
        placeholder="Ask: Who are the top knowledge anchors in Product?"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />
      <button type="button" className="primary" onClick={handleAsk}>
        Send Query
      </button>
      <div className="voice-response">
        <p className="label">AI Response</p>
        <p>{response}</p>
      </div>
    </section>
  );
}
