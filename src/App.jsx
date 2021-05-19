import React, {useState} from 'react';
import Youtube from 'react-youtube'

const App = () => {
  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      },
    }

    const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  const currentURL = `https://www.youtube.com/live_chat?v=5qap5aO4i9A&embed_domain=${window.location.hostname}`
  return (
    <div className="App">
      <h1>Live Stream Web App</h1>
      <div className='container'>
        <Youtube videoId="5qap5aO4i9A" opts={opts} onReady={_onReady}/>
        <iframe className='liveChat' title='Live Chat Event' frameBorder="0" width="480" height="480" src={currentURL}></iframe>
          </div>
        </div>
        );
}

export default App;
