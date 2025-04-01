import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  article: Array,
  sessionId: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Session", sessionSchema);
