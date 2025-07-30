import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError";

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    //trim la khong duoc co khoang cach o dau hoac cuoi chuoi string
    //trim phai di voi strict
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  });

  try {
    //set abortEarly: false de truong hop co nhieu loi validation thi tra ve tat ca loi
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    //validate du lieu hop le thi cho req di tiep sang phan khac (Controller ,....)
    next();
  } catch (error) {
    const errorMessage = new Error(error).message;
    const customError = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errorMessage
    );
    next(customError);
  }
};

export const boardValidation = {
  createNew,
};
