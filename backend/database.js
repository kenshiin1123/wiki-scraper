import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default run;

// const MONGOSH_URI = process.env.MONGOSH_URI;

// async function runDev() {
//   const db = mongoose.connection;
//   mongoose.connect(MONGOSH_URI);
//   db.on("error", console.error.bind((console, "Connection Error:")));
//   db.once("open", function () {
//     console.log("You successfully connected to MongoDB!");
//   });
// }

// export default runDev;
