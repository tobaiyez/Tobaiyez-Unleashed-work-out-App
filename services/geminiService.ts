import { GoogleGenAI } from "@google/genai";
import { ADVISOR_SYSTEM_PROMPT } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAdvisorResponse = async (userMessage: string, contextHistory: string[] = []): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: ADVISOR_SYSTEM_PROMPT,
        temperature: 0.7,
      },
      history: contextHistory.map((msg, index) => ({
        role: index % 2 === 0 ? 'user' : 'model',
        parts: [{ text: msg }],
      })),
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please check your internet connection or try again later.";
  }
};
