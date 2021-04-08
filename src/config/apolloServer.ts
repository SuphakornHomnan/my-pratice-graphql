import express from "express";
import { ApolloServer } from "apollo-server-express";
import { BookResolver } from "../Book/book.resolver";
import { MyContext } from "src/graphql/schema/context";
import { buildSchema } from "type-graphql";
import { RootResolver } from "../graphql/root.resolver";

export const configApolloServer = async () => {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [BookResolver, RootResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
  });
  server.applyMiddleware({ app });
  const PORT = process.env.PORT ?? 9999;
  app.listen(PORT, () =>
    console.log("Now browse to http://localhost:" + PORT + server.graphqlPath)
  );
};
