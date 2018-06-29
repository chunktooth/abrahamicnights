import React from 'react';
import Book from '../Book/Book';
import lessons from '../data/lessons';
import './Lessons.css';

const Lessons = () => {
  const mappedLessons = lessons.map((lesson, index) => {

    return ( 
      <Book 
        key={ index } 
        week={ lesson.week }
        books={ lesson.books } 
      />
    )
  });

  return (
    <table>
      <th><h2>Weekly Lessons</h2></th>
      <tbody>{ mappedLessons }</tbody>
    </table>
  )
}

export default Lessons;