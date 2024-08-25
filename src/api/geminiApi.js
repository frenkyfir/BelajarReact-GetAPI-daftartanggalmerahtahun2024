// src/api/geminiApi.js
import axios from "axios";

const GEMINI_API_URL = "https://api.gemini.com/v1/search"; // Gantilah dengan URL API yang sesuai

export const searchWithGemini = async (query) => {
  try {
    const response = await axios.post(
      GEMINI_API_URL,
      {
        query: query,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_API_KEY_HERE`, // Gantilah dengan API key Anda
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error while searching with Gemini:", error);
    throw error;
  }
};
