import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardValidation } from "../../validations/boardValidation";
import { boardControllers } from "../../controllers/boardControllers";

const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "APIs get list boards" });
  })
  .post(boardValidation.createNew, boardControllers.createNew);

export const boardRouter = Router;
