import "reflect-metadata";
import { configMongo } from "./config/mongo";
import { configApolloServer } from "./config/apolloServer";

const run = async () => {
  configMongo();
  configApolloServer();
};

run();
