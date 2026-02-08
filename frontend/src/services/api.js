const BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.trim() || "http://localhost:3001";

export const requestVoiceAnswer = async (question) => {
  try {
    const response = await fetch(`${BASE_URL}/api/voice/query`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch voice response");
    }

    return await response.json();
  } catch (error) {
    return {
      message:
        "Voice backend unavailable. Connect the API to answer with Cypher + insights."
    };
  }
};
