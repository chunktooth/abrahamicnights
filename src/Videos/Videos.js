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
              title={ index } 
              width="375" 
              height="186" 
              src={ vid.url } 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen></iframe>
            <p className='intro'>{ vid.intro }</p>
          </div>
        }        
      </div>
    )
  });

  return (
    <div className='Videos'>
      <h2>Supplemental Videos</h2>
      <h5 className='sub-heading'>The following YouTube videos are frequently removed or taken offline for whatever reasons. Links that no longer work will eventually be replaced by a new link to a current video clip. In the interim, one can always enter the name of the subject in the YouTube search bar.</h5>
      <div className='vdo-display'>{ mappedVids }</div>
    </div>
  )
}

export default Videos;