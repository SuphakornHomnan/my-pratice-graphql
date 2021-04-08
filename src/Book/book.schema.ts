import { Field, ObjectType } from "type-graphql";
import { BaseObjectType } from "../graphql/schema/base";

@ObjectType()
export class Author {
  @Field()
  name: string;

  @Field()
  position: string

  @Field()
  phoneNumber: string
}

@ObjectType()
export class Book extends BaseObjectType {

  @Field()
  title: string

  @Field(()=> Author)
  author: Author
}



// export const typeDefs = gql`
//   type Book {
//     id: Int
//     title: String
//     author: Author
//   }

//   type Author {
//       name: String,
//       books: [Book]
//   }

//   type Query {
//     books: [Book]
//     authors: [Author] 
//     addBook(title: String!, author: String!) : [Book]
//     getBookbyId(id: Int!): Book
//   }

//   type Mutation {
//       addBook(title: String, author: String) : [Book]
//   }
// `