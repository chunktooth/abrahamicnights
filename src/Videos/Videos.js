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
          <iframe
            title={ vid.url }
            width="320"
            height="220"
            src={ vid.url }
            frameBorder="0" 
            allowFullScreen>
         </iframe>
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