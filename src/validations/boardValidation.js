import Joi from "joi";
import { StatusCodes } from "http-status-codes";

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    //trim la khong duoc co khoang cach o dau hoac cuoi chuoi string
    //trim phai di voi strict
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  });

  try {
    console.log(req.body);
    //set abortEarly: false de truong hop co nhieu loi validation thi tra ve tat ca loi
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    // next();
    res
      .status(StatusCodes.CREATED)
      .json({ message: "APIs V1 post from validation list boards" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ errors: new Error(error).message });
  }
};

export const boardValidation = {
  createNew,
};
