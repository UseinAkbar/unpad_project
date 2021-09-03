import React from 'react'
import mainStageImg from '../unpad_asset/Main-Stage.png'
import exhibitionImg from '../unpad_asset/Exhibition.png'
import journeyImg from '../unpad_asset/HIFI-Journey.png'

const Stage = () => {
    return (
        <div className='stage-container'>
            <a className='stage__menu' href='/livestream'>
                <img src={mainStageImg} alt="mainStage" className='stage-livestream' />
            </a>
            <a className='stage__menu' href='/hifi-journey'>
                <img src={journeyImg} alt="HIFIJourney" className='stage-HIFIJourney' />
            </a>
            <a className='stage__menu' href='/exhibition'>
                <img src={exhibitionImg} alt="Exhibition" className='stage-exhibition'/>
            </a>
        </div>
    )
}

export default Stage