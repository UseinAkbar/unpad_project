import React from "react";
import mainStageImg from '../unpad_asset/Main-Stage.png'
import exhibitionImg from '../unpad_asset/Exhibition.png'
import journeyImg from '../unpad_asset/HIFI-Journey.png'
import arrowAnimate from '../icon/arrow-animate.png'

const StageMobile = () => {
  return (
    <div className="stageMobile-container">
      <a href="/livestream" className="stageMobile__menu stageMobile__menu--livestream">
        <div className="imgBox--mb">
            <img src={mainStageImg} alt="mainStage" className='stage-livestream--mb'/>
        </div>
        <h2 className="stageMobile__heading">Livestream</h2>
      </a>

      <span className='arrowBox'><img src={arrowAnimate} alt="" className='arrowImg' /></span>

      <a href="/exhibition" className="stageMobile__menu stageMobile__menu--exhibition">
        <div className="imgBox--mb">
            <img src={exhibitionImg} alt="Exhibition" className='stage-exhibition--mb'/>
        </div>
        <h2 className="stageMobile__heading">Exhibition</h2>
      </a>

      <span className='arrowBox'><img src={arrowAnimate} alt="" className='arrowImg' /></span>

      <a href="/hifi-journey" className="stageMobile__menu stageMobile__menu--hifiJourney">
        <div className="imgBox--mb">
            <img src={journeyImg} alt="HIFIJourney" className='stage-HIFIJourney--mb'/>
        </div>
        <h2 className="stageMobile__heading">HIFI Journey</h2>
      </a>
    </div>
  );
};

export default StageMobile;
