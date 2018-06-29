import React from 'react';
import Extra from '../Extra/Extra';
import readings from '../data/readings';
import './Readings.css';

const Readings = () => {
  const mappedReadings = readings.map((reading, index) => {

    return ( 
      <Extra 
        key={ index }
        topic= { reading.topic } 
        books={ reading.books } 
      />
    )
  });

  return (
    <div className='Readings'>
      <h2>Additional Readings</h2>
      <div>{ mappedReadings }</div>
    </div>
  )
}

export default Readings;