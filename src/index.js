import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// set variables
const books = [
  {
    img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <div>
            <img src={book.img} alt="" />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        );
      })}
    </section>
  );
}

// const Book = ({img, title, author}) => {
//  return (
//   <article className='book'>
//   <img src={img} alt="" />
//   <h1>{title}</h1>
//   <h4>{author}</h4>
//   </article>
//  )
// }

ReactDom.render(<BookList />, document.getElementById("root"));
