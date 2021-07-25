import React, {useState} from 'react'
import Youtube from 'react-youtube'
import chat from '../icon/chat.png'
import icon from '../icon/sprite.svg'

const Live = () => {

  const [isTrue, setTrue] = useState(false)

  const handleClick = () => {
    setTrue(!isTrue)
  }

  const currentURL = `https://www.youtube.com/live_chat?v=8o49U8xAfZ4&embed_domain=${window.location.hostname}`
  const opts = {
              height: '460',
              width: '600',
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
              },
            }
              
    return (
        <div className='stream'>
          <div className="stream__banner banner">
            <h2 className="stream__heading heading">Live Stream</h2>
          </div>
          <div className="stream__video">
            <Youtube className='yt' videoId='8o49U8xAfZ4' opts={opts} />
          </div>

          <button className="chat__cta" onClick={handleClick}>
            <img src={chat} className='chat__icon'/>
          </button>

          <div className={isTrue && 'overlay'}></div>
          <div className={`chat__container ${isTrue && 'toggleChat'}`}>
            <svg className={`chat__exit ${isTrue && 'toggleExit'}`} onClick={handleClick}>
              <use xlinkHref={`${icon}#icon-exit`}></use>
            </svg>
            <iframe className='chat__live' title='Live Chat Event' frameBorder="0" width="480" height="440" src={currentURL}></iframe>
          </div>
        </div>
    )
}

export default Live