import React from 'react';
import vids from '../data/vids';
import './Videos.css';

const Videos = () => {
  const mappedVids = vids.map((vid, index) => {

    return (
      <div key={ index } className='Vid'>
      <p className='intro'>{ vid.intro }</p>
        {
          vid.url &&
          <div class="youtube-player" data-id='CP5UB_gRED8'></div>
        }
        {
          vid.note &&
          <p>{ vid.note }</p>
        }      
      </div>
    )
  });

  return (
    <div className='Videos'>
      <h2>Supplemental Videos</h2>
      <div>{ mappedVids }</div>
    </div>
  )
}

export default Videos;