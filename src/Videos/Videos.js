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
        {
          vid.note &&
          <p className='note'>{ vid.note }</p>
        }
        {
          !vid.note && vid.url &&
          <div>
            <p className='intro'>{ vid.intro }</p>
            <ReactYoutube
              className='ReactYoutube'
              videoID={ vid_id }
              lazyload="true"
              lazyloadSize={ 300 }
              thumbnailId="default"
              thumbnailRes="maxres"
              youtubeOptions={{
                autoplay: "1",
                red: "0"
              }}
            />
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