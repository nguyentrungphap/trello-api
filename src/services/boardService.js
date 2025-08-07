import { slugify } from "../utils/formatters";
import { boardModel } from "../models/boardModel";

const createNew = async (reqBody) => {
  try {
    const newboard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };

    const createNewBoard = await boardModel.createNew(newboard);
    const findOneBoard = await boardModel.findOneById(
      createNewBoard.insertedId.toString()
    );

    console.log(findOneBoard);
    return findOneBoard;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNew,
};
