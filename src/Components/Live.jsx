import React, {useState} from 'react'
import Youtube from 'react-youtube'
import chat from '../icon/chat.png'
import icon from '../icon/sprite.svg'
import SidebarComp from './SidebarComp'

const Live = () => {

  const [isTrue, setTrue] = useState(false)
  const [isCollapse, setCollapse] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setTrue(!isTrue)
    setCollapse(!isCollapse)
  }
  
  const handleResponsive = () => {
    setOpen(!isOpen)
  }

  const currentURL = `https://www.youtube.com/live_chat?v=5qap5aO4i9A&embed_domain=${window.location.hostname}`
  const option = {
              height: '460',
              width: '600',
              playerVars: {
                autoplay: 1,
              },
            }
              
    return (
        <section className='stream'>
          <SidebarComp />
          {/* <img src={livestream} className="stream__background" /> */}
          <div className={`overlay ${(isTrue || isOpen) ? 'overlayFade' : null}`}></div>

          <div className={`stream__video ${isCollapse && 'streamCollapse'}`}>
            <Youtube className='yt' videoId='5qap5aO4i9A' opts={option} />
          </div>

          <button className="chat__cta" onClick={handleClick}>
            <img src={chat} className='chat__icon' alt="chat icon"/>
          </button>

          <div className={`chat__container ${isTrue && 'toggleChat'} ${isOpen && 'toggleChatMobile'}`}>
            <svg className={`chat__exit ${isTrue && 'toggleExit'}`} onClick={handleClick}>
              <use xlinkHref={`${icon}#icon-exit`}></use>
            </svg>
            <iframe className='chat__live' title='Live Chat Event' frameBorder="0" width="480" height="440" src={currentURL}></iframe>
          </div>

          <span className="chat__mobile" onClick={handleResponsive}>{isOpen ? <svg className='chat__mobile--exit'><use xlinkHref={`${icon}#icon-exit`}></use></svg> : <img src={chat} className='chat__mobile--open' alt="chat-icon"/>}</span>
        </section>
    )
}

export default Live