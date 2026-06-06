import { buildPortfolioContext } from './portfolioContext';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

let portfolioContext = null;

function getPortfolioContext() {
  if (!portfolioContext) {
    portfolioContext = buildPortfolioContext();
  }
  return portfolioContext;
}

/**
 * Send a message to Gemini API with full portfolio context injected.
 * @param {string} userMessage
 * @param {Array} chatHistory - array of {role, text} objects
 * @returns {Promise<string>} - AI response text
 */
export async function sendMessageToGemini(userMessage, chatHistory = []) {
  if (!GEMINI_API_KEY) {
    return "⚠️ Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.";
  }

  const systemContext = getPortfolioContext();

  // Build conversation history for Gemini
  const contents = [
    // Inject system context as the first user turn
    {
      role: 'user',
      parts: [{ text: `SYSTEM CONTEXT (use this to answer all questions):\n${systemContext}\n\nUNDERSTOOD. I will only use this context to answer questions about Abel.` }],
    },
    {
      role: 'model',
      parts: [{ text: "Understood! I'm Ask Abel AI, ready to answer questions about Abel Adamu Shumet based on his portfolio information." }],
    },
    // Add chat history (which already includes the latest user message)
    ...chatHistory.slice(-10).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    })),
  ];

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error('Gemini API error:', errData);
      return "I encountered an issue connecting to my AI brain. Please try again shortly.";
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || "I couldn't generate a response. Please try rephrasing your question.";
  } catch (error) {
    console.error('Gemini fetch error:', error);
    return "Network error. Please check your connection and try again.";
  }
}
