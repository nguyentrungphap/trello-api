import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRouters } from "./boardRouters";

const Router = express.Router();

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 ready" });
});

Router.use("/boards", boardRouters);

export const API_sV1 = Router;
