import React from 'react';
import mainStageImg from '../unpad_asset/Main-Stage.png'
import exhibitionImg from '../unpad_asset/Exhibition.png'
import journeyImg from '../unpad_asset/HIFI-Journey.png'

const Stages = () => {

    return (
        <section className="stage-container mx-auto">
            <a className='stage-container__menu' href='/livestream'>
                <img src={mainStageImg} alt="mainStage" className='stage-livestream' />
            </a>
            <a className='stage-container__menu' href='/hifi-journey'>
                <img src={journeyImg} alt="HIFIJourney" className='stage-HIFIJourney' />
            </a>
            <a className='stage-container__menu' href='/exhibition'>
                <img src={exhibitionImg} alt="Exhibition" className='stage-exhibition'/>
            </a>
        </section>
    )
}

export default Stages