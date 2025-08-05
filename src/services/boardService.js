import { slugify } from "../utils/formatters";

const createNew = async (reqBody) => {
  try {
    const newboard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };
    return newboard;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNew,
};
