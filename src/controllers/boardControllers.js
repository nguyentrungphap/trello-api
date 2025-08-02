import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError";
import { boardService } from "../services/boardService";

const createNew = async (req, res, next) => {
  try {
    const createBoard = await boardService.createNew(req.body);
    res.status(200).json({ createBoard });
  } catch (error) {
    console.log(error);
    next(error);
  } 
};

export const boardControllers = {
  createNew,
};
