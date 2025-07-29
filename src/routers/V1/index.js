import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRouter } from "./boardRouter";

const Router = express.Router();

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 ready" });
});

Router.use("/boards", boardRouter);

export const API_sV1 = Router;
