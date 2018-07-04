import React from 'react';
import ReactYoutube from 'react-youtube-lazy';
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
          <ReactYoutube
            videoID={ vid_id }
            lazyload="true"
            lazyloadSize={450}
            youtubeOptions={{
              autoplay: "",
              red: "0"
            }}
          />
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
      { mappedVids }
    </div>
  )
}

export default Videos;