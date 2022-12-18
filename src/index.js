import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// set variables
// const author = 'Amelia Hepworth';  
// const title = 'I Love You to the Moon and Back';
// const img = 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg';
function BookList() {
  return (
    <section className="booklist">
      <Book 
      author='Amelia Hepworth' 
      title='I Love You to the Moon and Back' 
      img='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg'
      />
      <Book />
    </section>
  )
}


const Book = (props) => {
 return (
  <article className='book'>
  <img src={props.img} alt="" />
  <h1>{props.title}</h1>
  <h4>{props.author}</h4>
  </article>
 )
}

ReactDom.render(<BookList/>, document.getElementById('root'));