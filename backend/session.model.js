import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  summary: {
    type: String,
    required: true,
  },
  article: Array,
});

export default mongoose.model("Session", sessionSchema);
