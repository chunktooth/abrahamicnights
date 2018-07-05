import React from 'react';
import './Videos.css';

const Videos = ({ vids }) => { 
  const mappedVids = vids.map((vid, index) => {

    return (
      <div key={ index } className='Vid'>
        {
          vid.note &&
          <p className='note'>{ vid.note }</p>
        }
        {
          !vid.note && vid.url &&
          <div key={ index }>
            <iframe 
              width="320" 
              height="186" 
              src={ vid.url } 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen></iframe>
            <p className='intro'>{ vid.intro }</p>
          </div>
        }        
      </div>
    )
  });

  return (
    <div className='Videos'>
      <h2>Supplemental Videos</h2>
      <div className='vdo-display'>{ mappedVids }</div>
    </div>
  )
}

export default Videos;