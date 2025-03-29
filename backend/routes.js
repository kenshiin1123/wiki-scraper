import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

import { extractPageContents, getSummary, saveArticle } from "./controller.js";

// Scraping
router.post(process.env.SCRAPE_ENDPOINT, extractPageContents);

// Summary
router.post(process.env.GEMINI_API_ENDPOINT, getSummary);

// Sessions
router.post(process.env.SESSION_ENDPOINT, saveArticle);

export default router;
