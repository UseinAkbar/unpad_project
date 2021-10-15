import React, { useState } from "react";
import KaryaExhibition from "./KaryaExhibition";
import data from "../data";
import bannerExhibition from '../unpad_asset/exhibitionImages/bannerExhibition.png'
import PopUpExhibition from "./PopUpExhibition";
import '../assets/css/Exhibition.css'
import SidebarComp from "./SidebarComp";

const Exhibition = () => {
  const [environment, setEnvironment] = useState({
    idSlide: "",
    titleSlide: "",
    winnerSlide: "",
    angkatanSlide: ""
  });
  const [isTrue, setTrue] = useState(false);

  const setData = (i) => {
    const { id, title, winner, angkatan } = data[i];
    setEnvironment({
      idSlide: id,
      titleSlide: title,
      winnerSlide: winner,
      angkatanSlide: angkatan
    });
  };

  const handlePopUp = (val) => {
      setTrue(true);
      setData(val);
  };

  const handleClose = () => {
    setTrue(false);
    setEnvironment({
      idSlide: "",
      titleSlide: "",
      winnerSlide: "",
      angkatanSlide: ""
    });
  };

  return (
    <section className="karya">
      <SidebarComp />
      
      <img className="karya__banner" alt='bannerSayembararia' src={bannerExhibition} />

      <div className="karya__desktop">
        {data.map((item, i) => {
          const { title, thumbnail } = item;
          return (
            <KaryaExhibition
              key={i}
              index={i}
              title={title}
              thumbnail={thumbnail}
              handlePopUp={handlePopUp}
            />
          );
        })}
      </div>

      {/* <div className="karya__video-mobile">
        <SwiperMobile handlePopUp={handlePopUp} />
      </div> */}

      <PopUpExhibition
        isTrue={isTrue}
        environment={environment}
        handleClose={handleClose}
      />

      {/* <SlideVideo
        num={num}
        isTrue={isTrue}
        disableLeft={disableLeft}
        disableRight={disableRight}
        environment={environment}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleClose={handleClose}
      /> */}
    </section>
  );
};

export default Exhibition;
