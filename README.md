# NEXORA – Your AI News Reporter 📰🤖

[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-Deploy-blue?logo=huggingface)](https://huggingface.co/spaces/vikasgautam2003/NEXORA__Your_News_Reporter)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v22-blue?logo=node.js)](https://nodejs.org/)
[![LangChain](https://img.shields.io/badge/LangChain-v1.0-orange)](https://www.langchain.com/)
[![Gemini](https://img.shields.io/badge/Gemini-1.5-flash-purple)](https://developers.google.com/)

---

## 🚀 Overview

NEXORA is an AI-powered news summarizer that fetches the latest news from the web using **SerpAPI** and summarizes it with **Google Gemini (LangChain)**.  
Just type any topic, and NEXORA gives you a concise, reader-friendly summary of the latest headlines.

---

## 🔹 Features

- ✅ Fetch top news headlines in real-time via SerpAPI  
- ✅ Summarize news in 3–5 sentences using Gemini LLM  
- ✅ Supports any topic: politics, sports, tech, entertainment  
- ✅ Lightweight, fast, and easy-to-use UI built with **EJS + Tailwind**  
- ✅ Ready to deploy on **Hugging Face Spaces**

---

## 🛠 How It Works

1. User enters a query/topic  
2. `server.js` calls `agent.js`  
3. `agent.js` fetches top 4 news articles using **SerpAPI**  
4. Headlines are formatted and sent to **Gemini**  
5. Gemini generates a neat, readable summary  
6. Summary is displayed on the frontend  

---

## 💻 Installation (Local)

```bash
git clone https://github.com/vikasgautam2003/NEXORA__Your_News_Reporter.git
cd NEXORA__Your_News_Reporter
npm install
cp .env.example .env   # add your GEMINI_API_KEY and SERPAPI_API_KEY
npm start


Open http://localhost:3000 in your browser.

🔑 Environment Variables

Add the following to your .env:

GEMINI_API_KEY=your_google_gemini_key
SERPAPI_API_KEY=your_serpapi_key
PORT=3000
