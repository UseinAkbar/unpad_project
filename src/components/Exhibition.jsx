import React, {useState} from 'react';
import VideoExhibtion from './VideoExhibition';
import data from '../data'
import img1 from '../img/img-1.jpg'
import img2 from '../img/img-2.jpg'
import img3 from '../img/img-3.jpg'
import img4 from '../img/img-4.jpg'
import img5 from '../img/img-5.jpg'
import img6 from '../img/img-6.jpg'
import leftArrow from '../icon/left-arrow.png'
import rightArrow from '../icon/right-arrow.png'
import icon from '../icon/sprite.svg'
import Youtube from 'react-youtube'

const Exhibition = () => {
    const [num, setNum] = useState(0)
    const [idSLide, setId] = useState('')
    const [titleSlide, setTitle] = useState('')
    const [paraphSlide, setParaph] = useState('')
    const [isTrue, setTrue] = useState(false)
    const [disableLeft, setDisableLeft] = useState(false)
    const [disableRight, setDisableRight] = useState(false)
    const images = [img1, img2, img3, img4, img5, img6]

    const handlePrev = () => {
        if(num === 0) {
            setNum(0)
        } else {
            setDisableRight(false)
            const val = num-1
            if(val === 0) {
                setDisableLeft(true)
            }
            const {id, title, paraph} = data[val]
            setNum(val)
            setTitle(title)
            setId(id)
            setParaph(paraph)
        }
    }

    const handleNext = () => {
        if(num === 5) {
            setNum(5)
        } else {
            setDisableLeft(false)
            const val = num+1
            if(val === 5) {
                setDisableRight(true)
            }
            const {id, title, paraph} = data[val]
            setNum(val)
            setTitle(title)
            setId(id)
            setParaph(paraph)
        }
    }

    const handleSlide = (val, state) => {
        if(val === 0) {
            setDisableLeft(true)
        } else if(val === 5) {
            setDisableRight(true)
        }
        const {id, title, paraph} = data[val]
        setTrue(state)
        setNum(val)
        setId(id)
        setTitle(title)
        setParaph(paraph)
    }

    const handleClose = () => {
        setTrue(false)
        setNum(0)
        setId('')
        setTitle('')
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
        <div className='karya'>
            <div className="karya__banner banner">
                <h1 className="karya__heading heading">Exhibitions</h1>
            </div>

            <div className="karya__video">
                {data.map((item, i) => {
                    const {title, desc} = item
                    return (
                        <VideoExhibtion index={i} title={title} desc={desc} img={images[i]} handleSlide={handleSlide}/>
                    )
                })}
            </div>

            <div className={`slide ${isTrue && 'slidePerformance'}`}>
                <svg className='closeSide' onClick={handleClose}>
                    <use xlinkHref={`${icon}#icon-exit`}></use>
                </svg>
                <div className="videoContainer">
                    <div className="slideNav">
                        <img src={leftArrow} className={`slideLeft ${disableLeft && 'disableLeft'}`} onClick={handlePrev}/>
                        <h3 className={`slideTooltip ${num === 0 ? 'hiddenTooltip' : null}`}>{`Video ${num}`}</h3>
                    </div>
                    <div className='slideVideo'>
                        <Youtube className='yt' videoId={idSLide} opts={opts} />
                    </div>
                    <div className="slideNav">
                        <img src={rightArrow} className={`slideRight ${disableRight && 'disableRight'}`} onClick={handleNext} />
                        <h3 className={`slideTooltip ${num === 5 ? 'hiddenTooltip' : null}`}>{`Video ${num+2}`}</h3>
                    </div>
                    <div className="slideDetail">
                        <h2 className="slideTitle">{titleSlide}</h2>
                        <span className="slideBorder"></span>
                        <p className="slideDesc">{paraphSlide}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exhibition