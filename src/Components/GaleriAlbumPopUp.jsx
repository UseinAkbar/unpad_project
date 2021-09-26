import React from 'react'
import icon from '../icon/sprite.svg'

const GaleriAlbumPopUp = ({id, isAlbumPopUp, albumPhotos, handleClose, handleItemPopUp}) => {
    return (
        <div className={`albumPhoto ${isAlbumPopUp && 'albumPopUp'}`}>
            <svg className='closeAlbum' onClick={handleClose}>
                    <use xlinkHref={`${icon}#icon-exit`}></use>
            </svg>
            <div className={`albumPhoto__box ${id === 'album15' ? 'albumPhoto__box-15' : null}`}>
                {albumPhotos.map((item, i) => {
                    return (
                        <div className='albumPhoto__item' key={i} onClick={() => handleItemPopUp(item)}>
                            {item.toLowerCase().includes('jpg') ? 
                                <img src={item} alt="photo" loading="lazy" className="albumPhoto__image" /> : 
                                <div className="albumPhoto__videoBox">
                                    <svg className='playVideoIcon'>
                                        <use xlinkHref={`${icon}#icon-play`}></use>
                                    </svg>
                                    <video width="100%" className='albumPhoto__video'>
                                        <source src={item} type='video/mp4'/>
                                    </video>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GaleriAlbumPopUp