import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

import {
  extractPageContents,
  getSummary,
  saveArticle,
  getSavedArticles,
  deleteSavedArticle,
} from "./controller.js";

// Scraping
router.post(process.env.SCRAPE_ENDPOINT, extractPageContents);

// Summary
router.post(process.env.GEMINI_API_ENDPOINT, getSummary);

// Sessions
router.post(process.env.SESSION_ENDPOINT, saveArticle);
router.post(process.env.SAVED_ARTICLES_ENDPOINT, getSavedArticles); // this is used to get the saved articles
router.delete(process.env.SAVED_ARTICLES_ENDPOINT, deleteSavedArticle); // this is used to delete a saved article

export default router;
