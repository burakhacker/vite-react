import { useState } from "react";
import Boek from "./Boek";

const BookList = () => {

    const [books, SetBooks] = useState([
        {title: "het leven van een loser1", Image: "afbeelding 1",
        author: "Ola"},
        {title: "het leven van een loser2", Image: "afbeelding 2",
        author: "Ola"},
        {title: "het leven van een loser3", Image: "afbeelding 3",
        author: "Ola"},
        {title: "het leven van een loser4", Image: "afbeelding 4",
        author: "Ola"},
    ]);

    return (
        <section>
            {books.map((book) => (
                <Boek title={book.title} author={book.author} image={book.Image} />
            ))}
        </section>
    );
};
export default BookList