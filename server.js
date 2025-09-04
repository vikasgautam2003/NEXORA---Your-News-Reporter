import express from "express";
import { config } from "dotenv";
import { getNews } from "./agent.js";

config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { result: null, query: null });
});

app.post("/news", async (req, res) => {
  const query = req.body.query;
  if (!query) {
    return res.render("index", { result: "Please enter a topic.", query: "" });
  }

  try {
    const result = await getNews(query);
    res.render("index", { result, query });
  } catch (err) {
    console.error(err);
    res.render("index", { result: "Error fetching news. Try again later.", query });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Nexora running at http://localhost:${PORT}`));
