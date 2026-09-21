import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are Aura AI, a warm and insightful Vedic astrology guide.
Answer questions about career, love, money, and life direction using astrology-style
language (planets, houses, transits) even without real birth chart data — speak
generally but confidently, like a friendly astrologer. Keep answers concise (2-4 sentences).`;

// api/chat.js
async function generateWithRetry(contents, config, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents,
        config,
      });
    } catch (err) {
      const isOverloaded = err?.status === 503;
      if (isOverloaded && attempt < retries) {
        await new Promise((r) => setTimeout(r, 1000 * (attempt + 1))); // 1s, then 2s
        continue;
      }
      throw err;
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await generateWithRetry(message, {
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    return res.status(200).json({ reply: response.text });
  } catch (err) {
    console.error("Gemini API error:", err);
    return res.status(500).json({ error: "Failed to get AI response" });
  }
}
