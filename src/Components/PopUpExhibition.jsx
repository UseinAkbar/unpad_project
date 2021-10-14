import React from 'react'
import icon from '../icon/sprite.svg'
import Youtube from 'react-youtube'
import Zoom from 'react-medium-image-zoom'
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-medium-image-zoom/dist/styles.css'
import '../assets/css/PopUp.css'

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// install Swiper components
SwiperCore.use([Pagination, Autoplay, EffectFade]);

const PopUpExhibition = ({isTrue, environment, handleClose}) => {
    const {idSlide, titleSlide, winnerSlide, angkatanSlide} = environment
    const isYoutube = ['POA Berdendang'].includes(titleSlide)
    const isImage = ['POA Berkreasi', 'POA Bergaya', 'POA Menerka'].includes(titleSlide)
    const isSoundCloud = ['POA Berceritera'].includes(titleSlide)
    const params = {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false
        }
    }
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
                        {isYoutube && <Youtube className='popUpYoutube' videoId={idSlide} opts={opts} />}

                        {isSoundCloud && <div className='soundcloudContainer'>
                        <iframe title={idSlide} className='souncloudIframe' width="500" height="450" scrolling="no" frameborder="no" src={idSlide}></iframe>
                            <div className='soundcloudDetail'><a href="https://soundcloud.com/user-45520390" title="Lumari." target="_blank" rel='noreferrer'>Lumari</a> · <a href="https://soundcloud.com/user-45520390/emi_naadir_athhar_cele_2019_podcast" className='soundcloudTitle' title="Emi_Naadir_Athhar_Cele_2019_Podcast" target="_blank" rel='noreferrer'>Emi_Naadir_Athhar_Cele_2019_Podcast</a></div>
                            </div>}

                        {isImage && <div className='instagramPost'>
                            {titleSlide === 'POA Bergaya' ? <Swiper {...params}>
                            {idSlide.map( (item, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <Zoom>
                                            <img src={item} className="instagramImg instagramImgSlide" alt={winnerSlide} />
                                        </Zoom>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper> : <Zoom><img src={idSlide} className="instagramImg" alt={winnerSlide} /></Zoom>}
                        
                            
                            <span className='instagramText'>Created by: {winnerSlide} </span>
                            </div>}
                    </div>
                    <div className="popUpDetail">
                        <h2 className="popUpTitle">{titleSlide}</h2>
                        <span className="popUpBorder"></span>
                        <p className="popUpDesc">{titleSlide} terbaik diberikan kepada <span className="popUpWinner">{winnerSlide}</span> dari angkatan <span className="popUpAngkatan">{angkatanSlide}</span>. Selamat!</p>
                    </div>
                </div>
        </div>
    )
}

export default PopUpExhibition