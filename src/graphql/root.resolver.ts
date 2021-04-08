import { Query, Resolver } from "type-graphql";

@Resolver()
export class RootResolver {
  @Query(() => String)
  root() {
    return "Hello everyone to the GraphQL world";
  }
}
