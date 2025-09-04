import { config } from "dotenv";
config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import fetch from "node-fetch";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.7,
  maxOutputTokens: 1024,
});

export async function getNews(query) {
  try {
    const serpRes = await fetch(
      `https://serpapi.com/search.json?q=${encodeURIComponent(
        query
      )}&api_key=${process.env.SERPAPI_API_KEY}&hl=en&gl=us`
    );
    const parsed = await serpRes.json();

   const topResults = parsed?.organic_results?.slice(0, 4) || [];

        const headlines = topResults
        .map(
            (r, i) =>
            `${i + 1}. ${r.title}\nSnippet: ${r.snippet || "No snippet available"}\nLink: ${r.link}`
        )
        .join("\n");

    const prompt = `Here are some latest news headlines and snippets for "${query}":\n${headlines}\n\nSummarize them in a clear, reader-friendly way (3–5 sentences).`;

    const res = await model.invoke(prompt);

    return res?.content?.[0]?.text || headlines;
  } catch (err) {
    console.error("❌ Error in getNews:", err);
    return "Sorry, something went wrong while fetching the news.";
  }
}
