import React, {useState} from 'react'
import data from '../data'
import List from './List'
import Youtube from 'react-youtube'

const Exhibition = () => {
    const [id, setID] = useState('EFYEni2gsK0')
    const [titleVid, setTitleVid] = useState('Performance 1')
    // const [fade, setFade] = useState('')

    const opts = {
        height: '460',
        width: '600',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
      }

    const handleID = (idVid, titleVid, fadeClass) => {
        setID(idVid)
        setTitleVid(titleVid)
        // setFade(fadeClass)
        // setTimeout(() => {
        //     setFade('')
        // }, 500)
    }

    return (
        <div className='performance'>

            <div className={`videoPerformance`}>
                <Youtube className='yt' videoId={id} opts={opts} />
            </div>

            <ul className="list">
                {data.map((item, i) => {
                    const {id, title, desc} = item
                    return (
                        <div>
                            <input type="radio" name='choice' id={`list${i+1}`} className='input' />
                            <label htmlFor={`list${i+1}`} className='list__label'>
                                <List idVideo={id} title={title} desc={desc} index={i} handleID={handleID} />
                            </label>
                        </div>
                    )
                })}
            </ul>
            <h1 className='performance__heading'>{titleVid}</h1>
        </div>
    )
}

export default Exhibition