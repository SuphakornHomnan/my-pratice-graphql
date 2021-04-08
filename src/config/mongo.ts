import dotenv from "dotenv";
process.env.NODE_ENV ? dotenv.config() : null;
import mongoose from "mongoose";

export const configMongo = async () => {
  dotenv.config();
  try {
    const { MONGO_USER, MONGO_PASS, MONGO_DB } = process.env;
    const mongoURL = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@first-cluster.nvg6s.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`${new Date()} || mongodb connected`);
  } catch (error) {
    console.log(error);
  }
};
