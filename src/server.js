import express from "express";
import { CONNECT_DB, GET_DB, CLOSE_DB } from "./config/mongodb.js";
import exitHook from "async-exit-hook";
import { env } from "./config/environment.js";

const START_SERVER = () => {
  const app = express();

  app.get("/", async (req, res) => {
    try {
      const collections = await GET_DB().listCollections().toArray();
      console.log(collections);
      res.send("<h1>Hello World!</h1><hr>");
    } catch (err) {
      console.error("Error fetching collections:", err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `Hello Phap dep trai, I am running at http://${env.APP_HOST}:${env.APP_PORT}/`
    );
  });

  exitHook(async () => {
    console.log("Disconnecting from MongoDB.........");
    await CLOSE_DB();
    console.log("Disconnected from MongoDB.........");
  });
};

(async () => {
  try {
    console.log("Connecting to MongoDB...");
    await CONNECT_DB();
    console.log("Connected to MongoDB");
    START_SERVER();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
})();
