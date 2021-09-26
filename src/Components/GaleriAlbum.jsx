import React from 'react'
import gallery from '../gallery'

const GaleriAlbum = ({filterAlbum}) => {
    return (
        <div className="journey__gallery">
            <h1 className="journey__gallery-title">Galeri HIFI</h1>
            {gallery.map((album, i) => {
                const {thumbnail, desc, id} = album
                return (
                    <div className="journey__galleryAlbum" key={i} onClick={() => filterAlbum(id)}>
                        <div className="journey__galleryAlbum-thumbnailBox">
                            <img src={thumbnail} alt="thumbnail" className="journey__galleryAlbum-thumbnail" />
                        </div>
                        <h3 className="journey__galleryAlbum-desc">{desc}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default GaleriAlbum