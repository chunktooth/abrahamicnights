import React from 'react';
import './Book.css';

const Book = ({ week, books }) => {
  const mappedBooks = books.map((book, index) => {
    let pageKey;
    let pageURL;
    const mappedPages = book.pages.map((page, index) => {
      for (let [key, val] of Object.entries(page)) {
        pageKey = key
        pageURL = val;
      }
      if(pageURL) {
        return <a href={ pageURL } key={ index }>&nbsp;{ pageKey }&nbsp;</a>
      } else {
        return <p key={ index }>&nbsp;{ pageKey }&nbsp;</p>;
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
        { mappedPages }
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