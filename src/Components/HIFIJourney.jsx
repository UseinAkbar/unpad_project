import React, { useState } from 'react'
import GaleriAlbum from './GaleriAlbum'
import GaleriAlbumPopUp from './GaleriAlbumPopUp'
import GaleriItemPopUp from './GaleriItemPopUp'
import SidebarComp from './SidebarComp'
import '../assets/css/HifiJourney.css'
import judul from '../unpad_asset/hifiJourneyImages/judul.png'
import fotoJadul from '../unpad_asset/hifiJourneyImages/fotoJadul.png'
import tedx from '../unpad_asset/hifiJourneyImages/tedx.png'
import dosen from '../dosen'
import gallery from '../gallery'

const HIFIJourney = () => {
    const [isAlbumPopUp, setAlbumPopUp] = useState(false)
    const [isItemPopUp, setItemPopUp] = useState(false)
    const [albumPhotos, setAlbumPhotos] = useState([])
    const [srcItemPopUp, setSrcItemPopUp] = useState('')
    const [classAlbum15, setClassAlbum15] = useState('')

    const filterAlbum = (selectedId) => {
        const filteredAlbum = gallery.filter(item => {
            return item.id === selectedId
        })

        const {photos, id} = filteredAlbum[0]
        if(id === 'album15') {
            setClassAlbum15(id)
        }
        setAlbumPhotos(photos)
        setAlbumPopUp(!isAlbumPopUp)
    }

    const handleItemPopUp = (val) => {
        setSrcItemPopUp(val)
        setItemPopUp(!isItemPopUp)
    }

    const handleClose = () => {
        setAlbumPopUp(!isAlbumPopUp)
        setAlbumPhotos([])
        setClassAlbum15('')
    }

    const handleCloseItem = () => {
        setItemPopUp(!isItemPopUp)
        setSrcItemPopUp('')
    }

    return (
        <div className='journey'>
            <SidebarComp />
            <img src={judul} alt="header" className="journey__header" />
            <div className="journey__rectangle"></div>

            <div className="journey__detail journey__detail-1">
                <img src={fotoJadul} loading='lazy' alt="img-detail" className="journey__fotoJadul" />
                <div className="journey__boxDetail journey__boxDetail-HIFI">
                    <h1 className="journey__title journey__title-1">Awal Mula HIFI</h1>
                    <p className="journey__desc journey__desc-1">Hifi awal mulanya dibentuk sebagai tempat berhimpun nya mahasiswa fisika untuk melepaskan penat kuliah, seperti bermain kartu, bercengkrama, dll.</p>
                    <div className="journey__desc journey__desc-1">Dahulu jahim HIFI tidak berwarna Biru Tua – Merah, melainkan Biru Tua – warna pilihan sesuai Angkatan (pernah berwarna hijau, ungu, hingga biru muda).</div>
                </div>
            </div>
            <div className="journey__detail journey__detail-2">
                <div className="journey__boxDetail journey__boxDetail-kabinet">
                    <h1 className="journey__title journey__title-2">Kabinet Pertama</h1>
                    <p className="journey__desc journey__desc-2">Kepengurusan BP HIFI pertama yang memiliki nama kabinet adalah BP HIFI 2013 kabinet “Momentum”, namun nama kabinet yang pertama kali dicantumkan dalam LPJ adalah kabinet “Superposisi” BP HIFI 2014.</p>
                </div>
                <div className="journey__boxDetail journey__boxDetail-tedX">
                    <img src={tedx} loading='lazy' alt="img-detail" className="journey__fotoTedX" />
                    <p className="journey__desc journey__desc-3">TEDxUNPAD pernah diisi oleh warga himpunan HIFI (Teh Puspita Melati ’16).</p>
                </div>
                <div className="journey__boxDetail journey__boxDetail-dosen">
                    <h1 className="journey__title journey__title-3">Dosen Fisika Unpad juga Alumni HIFI, lho!</h1>
                    <p className="journey__desc journey__desc-3">Berikut adalah dosen-dosen Fisika Unpad yang merupakan alumni HIFI (per tahun 2021) :</p>
                    <ul className="journey__dosenList">
                        {dosen.map((item, i) => <li key={i} className='journey__dosenItem'>{item}</li>)}
                    </ul>
                </div>
                <div className="journey__boxDetail journey__boxDetail-namaHIFI">
                    <h1 className="journey__title journey__title-4">Nama HIFI</h1>
                    <p className="journey__desc journey__desc-4">Banyak yang tidak setuju dengan nama himafi dan ingin beda dari yang lain, maka tercetuslah nama HIFI. Nama HIFI sebenarnya diadopsi dari kata <span className="journey__span">“High-Fidelity”</span>.</p>
                </div>
                <div className="journey__boxDetail journey__boxDetail-funFact">
                    <h1 className="journey__title journey__title-5">Fun Fact Lain</h1>
                    <ul className="journey__funFactList">
                        <li className="journey__funFactItem">AD/ART dibentuk pada tahun zaman periode kedua tahun 70</li>
                        <li className="journey__funFactItem">HIFI dibentuk tahun 1969, hari Sabtu di Lapangan Fisika</li>
                    </ul>
                </div>
            </div>
            <div className="journey__rectangle"></div>
            <GaleriAlbum filterAlbum={filterAlbum}/>
            <GaleriAlbumPopUp id={classAlbum15} isAlbumPopUp={isAlbumPopUp} albumPhotos={albumPhotos} handleItemPopUp={handleItemPopUp} handleClose={handleClose}/>
            <GaleriItemPopUp srcItemPopUp={srcItemPopUp} isItemPopUp={isItemPopUp} handleCloseItem={handleCloseItem} />
        </div>
    )
}

export default HIFIJourney
