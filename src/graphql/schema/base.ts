import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class BaseObjectType {
    @Field(() => ID)
    _id: string;

    @Field()
    _createdAt: Date;

    @Field()
    _updatedAt: Date;
}
