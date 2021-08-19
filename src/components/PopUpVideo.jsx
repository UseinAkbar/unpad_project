import React from 'react'
import icon from '../icon/sprite.svg'
import Youtube from 'react-youtube'

const PopUpVideo = ({num, isTrue, environment, handleClose}) => {
    const {idSlide, titleSlide, authorSlide, paraphSlide} = environment
    const opts = {
        height: '480',
        width: '600',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
      }
      
    return (
        <div className={`popUp ${isTrue && 'popUpPerformance'}`}>
                <svg className='closeSide' onClick={handleClose}>
                    <use xlinkHref={`${icon}#icon-exit`}></use>
                </svg>
                <div className="popUpContainer">
                    <div className='mainSlide'>
                        {num < 2 && <Youtube className='yt' videoId={idSlide} opts={opts} />}
                        {num === 2 && <div className='soundcloudContainer'>
                            <iframe className='souncloudIframe' width="500" height="450" scrolling="no" frameborder="no" src={idSlide}></iframe>
                                <div className='soundcloudDetail'>
                                <a href="https://soundcloud.com/payung-teduh-official" className='soundcloudAuthor' title="Payung teduh Official" target="_blank">Payung teduh Official</a> · <a href="https://soundcloud.com/payung-teduh-official/berdua-saja" className='soundcloudTitle' title="Berdua Saja" target="_blank">Berdua Saja</a>
                                </div>
                            </div>}
                        {num > 2 && <div className='slidePost'>
                            <img src={idSlide} className="slideImg" />
                            <span className='slideText'>Source by: <a href="#" className="slideLink">{authorSlide}</a></span>
                            </div>}
                    </div>
                    <div className="slideDetail">
                        <h2 className="slideTitle">{titleSlide}</h2>
                        <span className="slideBorder"></span>
                        <p className="slideDesc">{paraphSlide}</p>
                    </div>
                </div>
        </div>
    )
}

export default PopUpVideo