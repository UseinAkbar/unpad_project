import React, {useState} from 'react';
import Youtube from 'react-youtube'

const Video = ({id, title, classVideo, handleClick}) => {
    const [isTrue, setChat] = useState(false)
    const [isGrid, setGrid] = useState(false)
    const currentURL = `https://www.youtube.com/live_chat?v=${'8o49U8xAfZ4'}&embed_domain=${window.location.hostname}`

    const opts = {
        height: '440',
        width: '600',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
      }

    const toggleChat = () => {
        setGrid(!isGrid)
        setChat(!isTrue)
    }

    const clearToggle = () => {
        setGrid(false)
        setChat(false)
    }
  
    // const _onReady = (event) => {
    //   // access to player in all event handlers via event.target
    //   event.target.playVideo();
    // }

    return (
        <div className={`video ${classVideo}`}>
            <h2 className="video__subtitle my-6">{title}</h2>
            <div className={`video__streaming ${isGrid && 'grid-collapse'}`}>
                <div className='liveVideo'>
                    <Youtube className='yt' videoId={id} opts={opts} />
                </div>
                {id === '8o49U8xAfZ4' && <iframe className={`liveChat ${isTrue && 'chatOut'}`} title='Live Chat Event' frameBorder="0" width="480" height="440" src={currentURL}></iframe>}
            </div>
            {id === '8o49U8xAfZ4' && <span className='cta-chat' onClick={toggleChat}>Live Chat</span>}
            <span className="exit" onClick={() => {
                handleClick('')
                clearToggle()
            }}>&times;</span>
        </div>
    )
}

export default Video