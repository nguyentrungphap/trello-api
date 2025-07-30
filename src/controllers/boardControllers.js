import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    const messageError = ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error);
    next(messageError);
  }
};

export const boardControllers = {
  createNew,
};
