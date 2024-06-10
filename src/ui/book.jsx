import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// making sure to pass in the book prop to the Book component
function Book({ book }) {
  // book prop now passed in the Book component let's continue
  return (
    <div className="book">
      <a href="">
        {/* //   src="https://covers.openlibrary.org/b/id/1010273721-L.jpg"
            //   we needed to change the above src to book.url */}
        <figure className="book__img--wrapper">
          <img src="{book.url}" alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="" className="book__title-link">
          {/* Atomic Habits
            need to make the title dynamic so we need to change the above to book.title */}
          {book.title}
        </a>
      </div>
      <div className="book__Ratings">
        {/* <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
        the ratings above are still not showing correctly so let's create a function to fix this issue */}
        {/* to do this correctly we need to create an array of elements to map over and turn each element
        of the array into the stars */}
        {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        //   we use Math.floor to round down the rating to the nearest whole number this is for if we got a .5
        ))}
        {/* now we need to add the half star */}
        {
            book.rating % 1 !== 0 && <FontAwesomeIcon icon="star-half-alt" />
            // if the rating is not a whole number then we want to add a half star
        }
      </div>
      <div className="book__price">
        {/* <span className="book__price--normal">$15.00</span>
          finally we need to make the above book__price dynamic so we need to change it to book.price */}
        {/* <span className="book__price--normal">${book.originalPrice}</span> */}{" "}
        {/* ${book.salePrice} */}
        {/* now we are having an issue where the sale price is showing up as undefined so we need to fix it  */}
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
}

export default Book;
