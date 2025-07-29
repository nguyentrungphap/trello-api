import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./environment";
const MONGODB_URI = env.MONGODB_URI;
const DATABASE_NAME = env.DATABASE_NAME;

let trelloDatabaseInstance = null;

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await client.connect();

  trelloDatabaseInstance = client.db(DATABASE_NAME);
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error("Must Connect Database");
  return trelloDatabaseInstance;
};

export const CLOSE_DB = async () => {
  await trelloDatabaseInstance.close();
};
