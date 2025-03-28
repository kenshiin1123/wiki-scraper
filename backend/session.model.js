import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  article: {
    summary: String,
    type: [
      {
        contents: {
          type: String,
          required: true,
        },
        tag: {
          type: String,
          required: true,
        },
      },
    ],
    default: [],
  },
});

export default mongoose.model("Session", sessionSchema);
