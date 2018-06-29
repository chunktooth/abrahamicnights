import React from 'react';
import './Extra.css';

const Extra = ({topic, books }) => {
  const mappedBooks = books.map((book, index) => {
    return (
      <div key={ index } className='extra-div'>
        <p>{ book.author }. </p>
        <a href={ book.url }>{ book.name }.</a>
        {
          book.publisher &&
          <p> { book.publisher }. </p>
        }
        <p>{ book.pages }</p>
      </div>
    )
  })

  return (
    <div className='Extra'>
      <h3 className="topic">{ topic }</h3>
      <hr></hr>
      <div className="materials">{ mappedBooks }</div>
    </div>
  )
} 

export default Extra;