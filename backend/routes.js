import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

import { extractPageContents, getSummary } from "./controller.js";

router.post(process.env.SCRAPE_ENDPOINT, extractPageContents);
router.post(process.env.GEMINI_API_ENDPOINT, getSummary);

export default router;
