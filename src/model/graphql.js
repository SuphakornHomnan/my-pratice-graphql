import { gql } from 'apollo-server-express'
export const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: Author
  }

  type Author {
      name: String,
      books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author] 
    addBook(title: String!, author: String!) : [Book]
    getBookbyId(id: Int!): Book
  }

  type Mutation {
      addBook(title: String, author: String) : [Book]
  }
`