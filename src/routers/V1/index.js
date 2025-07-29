import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRouters } from "./boardRouters";

const Router = express.Router();

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 ready" });
});

Router.use("/boards", boardRouters);
Router.use("/card", boardRouters);
Router.use("/column", boardRouters);
Router.use("/invitation", boardRouters);
Router.use("/user", boardRouters);

export const API_sV1 = Router;
