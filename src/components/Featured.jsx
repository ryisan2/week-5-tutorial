import React from "react";
import Book from "../ui/book";
import {books} from '../data';

const Featured = () => {
    console.log(books)
    // console.log( books.filter(book => book.rating === 5).slice(0, 4));
    // used the slice cause we only wanted 4 books so we did it to get the first 4 books
    // function getFiveStarBooks(){
    // }
    // now that we have this above we don't actually need this funciton anymore instead
    // we are going to use the filter we used above in an div below    
  return (
      <section id="features">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Featured <span className="purple"> Books</span>
            </h2>
            <div className="books">
                {books
                .filter((book)=> book.rating === 5)
                .slice(0, 4)
                .map((book => <Book book={book} key ={book.id} />))}
                {/* now we are passng in the book as a prop to the book component and we need to make sure it is in the book component */}
      {/* we used the map function to loop through the books array and return a book component for each book in the array */}
         {/* now we need to make things dynamic with book component */}
          </div>
        </div>
        </div>
      </section>
  );
}

export default Featured;
