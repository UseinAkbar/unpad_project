import React from 'react';

const VideoExhibition = ({index, title, desc, img, handleSlide}) => {
    return (
        <div className='karya__item' onClick={() => handleSlide(index, true)}>
            <img src={img} className='karya__img'/>
            <div className="karya__title">
                <h2 className="karya__subheading">{title}</h2>
                <p className="karya__paraph">{desc}</p>
            </div>
        </div>
    )
}

export default VideoExhibition