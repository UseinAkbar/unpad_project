import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import icon from '../icon/sprite.svg'

const GaleriItemPopUp = ({srcItemPopUp, isItemPopUp, handleCloseItem}) => {
    return (
        <div className={`albumItem ${isItemPopUp && 'itemPopUp'}`}>
            <svg className='closeItem' onClick={handleCloseItem}>
                    <use xlinkHref={`${icon}#icon-exit`}></use>
            </svg>
            {srcItemPopUp.toLowerCase().includes('jpg') ?
                <div className="albumItem__image">
                    <Zoom>
                        <img src={srcItemPopUp} alt="previewFotoAlbumHIFI" loading="lazy" />
                    </Zoom>
                </div> : 
                <div className="albumItem__videoBox">
                    <video src={srcItemPopUp} className='albumItem__video' autoPlay='true' controls />
                </div>
            }
        </div>
    )
}

export default GaleriItemPopUp