import React from 'react';
import './Videos.css';

const Videos = ({ vids }) => { 

  const mappedVids = vids.map((vid, index) => {
    const vid_id = vid.url.map(link => {
      return link.substr(30);
    });

    return (
      <div key={ index } className='Vid'>
      <p className='intro'>{ vid.intro }</p>
        {
          vid.url &&
          <div className="youtube-player" data-id={ vid_id }></div>
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
      <div className='mapped-vids'>{ mappedVids }</div>
    </div>
  )
}

export default Videos;