import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./model/graphql";
import { books, authors } from "./model/dataset";
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
    getBookbyId: (_, { id }) =>
      books.find((book) => book.id === id)
        ? books.find((book) => book.id === id)
        : Error(`this ${id} is does not exist`),
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      books.push({
        title,
        author: {
          name: author,
        },
      });
      return books
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 9999 }, () =>
  console.log("Now browse to http://localhost:9999" + server.graphqlPath)
);
