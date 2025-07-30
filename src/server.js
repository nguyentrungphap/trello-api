import express from "express";
import { CONNECT_DB, GET_DB, CLOSE_DB } from "./config/mongodb";
import exitHook from "async-exit-hook";
import { env } from "./config/environment";
import { API_sV1 } from "./routers/V1";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";

const START_SERVER = () => {
  const app = express();

  //Enable req.body json data
  app.use(express.json());

  app.use("/v1", API_sV1);

  //Middleware xu ly loi tap trung
  app.use(errorHandlingMiddleware);

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `Hello Phap dep trai, I am running at http://${env.APP_HOST}:${env.APP_PORT}/`
    );
  });

  exitHook(async () => {
    console.log("Disconnecting from MongoDB.........");
    await CLOSE_DB();
    console.log("Disconnected from MongoDB");
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
