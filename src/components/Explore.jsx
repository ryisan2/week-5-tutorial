import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { books } from "../data";
import Book from "../ui/book";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <a href="/books">
            <button className="btn">Explore Books</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;