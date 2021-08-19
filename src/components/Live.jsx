import React, {useState} from 'react'
import Youtube from 'react-youtube'
import chat from '../icon/chat.png'
import icon from '../icon/sprite.svg'
import livestream from '../unpad_asset/livestream.png'

const Live = () => {

  const [isTrue, setTrue] = useState(false)
  const [isCollapse, setCollapse] = useState(false)
  const [isClose, setClose] = useState(false)
  const [toggleChatMobile, settoggleChatMobile] = useState('')

  const handleClick = () => {
    setTrue(!isTrue)
    setCollapse(!isCollapse)
  }

  const handleResponsive = () => {
    setClose(!isClose)
    settoggleChatMobile('toggleChatMobile')
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
        <section className='stream'>
          {/* <img src={livestream} className="stream__background" /> */}
          <div className={`stream__video ${isCollapse && 'streamCollapse'}`}>
            <Youtube className='yt' videoId='8o49U8xAfZ4' opts={opts} />
          </div>

          <button className="chat__cta" onClick={handleClick}>
            <img src={chat} className='chat__icon'/>
          </button>

          {/* <div className={isTrue && 'overlay'}></div> */}
          <div className={`chat__container ${isTrue && 'toggleChat'} ${isClose && toggleChatMobile}`}>
            <svg className={`chat__exit ${isTrue && 'toggleExit'}`} onClick={handleClick}>
              <use xlinkHref={`${icon}#icon-exit`}></use>
            </svg>
            <iframe className='chat__live' title='Live Chat Event' frameBorder="0" width="480" height="440" src={currentURL}></iframe>
          </div>

          <span className="chat__cta-mobile" onClick={handleResponsive}>{isClose ? 'Close Chat' : 'Open Chat'}</span>
        </section>
    )
}

export default Live