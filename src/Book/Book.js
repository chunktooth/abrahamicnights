import React from 'react';
import './Book.css';

const Book = ({ week, books }) => {
  const mappedBooks = books.map((book, index) => {
    let pageKey;
    let pageURL;
    book.pages.forEach(page => {
      for (let [key, val] of Object.entries(page)) {
        pageKey = key;
        pageURL = val;
      }
    });

    return (
      <div key={ index } className="book-div">
        {
          book.author &&
          <p>{ book.author }.&nbsp;</p>
        }
        { 
          book.url &&
          <a href={ book.url }>{ book.name }.</a>
        }
        {
          !book.url &&
          <p>&nbsp;{ book.name }.</p>
        }
        {
          book.publisher &&
          <p>&nbsp;{ book.publisher }.</p>
        }
        {
          pageURL &&
          <p>&nbsp;pp. <a href={ pageURL }>{ pageKey }</a></p>
        }   
        {
          !pageURL && pageKey &&
          <p>&nbsp;pp. { pageKey }</p>
        }     
      </div>
    )
  });

  return (
    <tr>
      <td className="table-week">{ week }</td>
      <td className="table-materials">{ mappedBooks }</td>
    </tr>
  )
}

export default Book;