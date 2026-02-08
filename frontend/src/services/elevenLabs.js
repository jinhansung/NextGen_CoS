export const synthesizeSpeech = async ({ text, voiceId, apiKey }) => {
  if (!apiKey) {
    return { status: "missing-key" };
  }

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": apiKey
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_monolingual_v1",
      voice_settings: {
        stability: 0.55,
        similarity_boost: 0.7
      }
    })
  });

  return response;
};
