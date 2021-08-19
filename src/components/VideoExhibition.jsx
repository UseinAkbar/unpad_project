import React from 'react';

const VideoExhibition = ({index, title, desc, img, handlePopUp}) => {
    return (
        <div className='karya__item' onClick={() => handlePopUp(index)}>
            <img src={img} className='karya__img'/>
            <div className="karya__title">
                <h2 className="karya__subheading">{title}</h2>
                <p className="karya__paraph">{desc}</p>
            </div>
        </div>
    )
}

export default VideoExhibition