import { Arg, Query, Resolver } from "type-graphql";
import { Book } from '../Book/book.schema'
import { books } from '../mock/dataset'

@Resolver()
export class BookResolver {
    @Query(()=> [Book])
    books(): Book[] {
        return books.map(book => ({
            ...book,
            _createdAt: new Date(book._createdAt),
            _updatedAt: new Date(book._updatedAt)
        }));
    }

    @Query(() => Book, { nullable: true })
    book(@Arg("_id") _id: string): Book | null {
        const book = books.find(book => book._id === _id);
        
        if (book) {
            return {
                ...book,
                _createdAt: new Date(book._createdAt),
                _updatedAt: new Date(book._updatedAt),
            }
        } else {
            throw new Error("Not found this id")
        }
    }

}