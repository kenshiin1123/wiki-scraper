import express from "express";
import dotenv from "dotenv";
import routes from "./routes.js";
import cors from "cors";
import connectDB from "./database.js";

dotenv.config();
const app = express();

// Environmental Variables
const PORT = process.env.PORT || 3000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN;
const API_PREFIX = process.env.API_PREFIX;

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ["POST", "GET", "DELETE"],
    credentials: true, // Allows cookies/auth headers
  })
);

app.use(express.json());

app.get(API_PREFIX, (req, res) => {
  res.send("WikiScraper Ready!");
});

app.use(API_PREFIX, routes);

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
  connectDB();
});
