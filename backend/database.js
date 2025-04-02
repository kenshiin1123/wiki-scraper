import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const uri = process.env.MONGODB_URI;

function run() {
  mongoose.connect(uri);
  mongoose.connection.on("error", console.error.bind("Connection Error"));
  mongoose.connection.once("open", () => {
    console.log("Mongodb Connected!");
  });
}

export default run;
