import React from 'react';

const KaryaExhibition = ({index, title, thumbnail, handlePopUp}) => {
    return (
        <div className='karya__item' onClick={() => handlePopUp(index)}>
            <img src={thumbnail} className='karya__img' alt="karya" />
            <h2 className="karya__title">{title}</h2>
        </div>
    )
}

export default KaryaExhibition