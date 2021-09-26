import React, { useState } from "react";
import VideoExhibtion from "./VideoExhibition";
import data from "../data";
import bannerExhibition from '../unpad_asset/exhibitionImages/bannerExhibition.png'
// import img1 from "../img/img-1.jpg";
// import img2 from "../img/img-2.jpg";
// import img3 from "../img/img-3.jpg";
// import img4 from "../img/img-4.jpg";
// import img5 from "../img/img-5.jpg";
// import img6 from "../img/img-6.jpg";
// import SlideVideo from "./SlideVideo";
import PopUpExhibition from "./PopUpExhibition";
import SwiperMobile from "./SwiperMobile";
import '../assets/css/Exhibition.css'
import SidebarComp from "./SidebarComp";

const Exhibition = () => {
  const [num, setNum] = useState(0);
  const [environment, setEnvironment] = useState({
    idSlide: "",
    titleSlide: "",
    authorSlide: "",
    paraphSlide: "",
  });
  const [isTrue, setTrue] = useState(false);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);

  const setData = (i) => {
    const { id, title, paraph, author = "" } = data[i];
    setEnvironment({
      idSlide: id,
      titleSlide: title,
      authorSlide: author,
      paraphSlide: paraph,
    });
  };

  const handlePrev = () => {
    if (num === 0) {
      setNum(0);
    } else {
      setDisableRight(false);
      const val = num - 1;
      if (val === 0) {
        setDisableLeft(true);
      }
      setNum(val);
      setData(val);
    }
  };

  const handleNext = () => {
    if (num === 5) {
      setNum(5);
    } else {
      setDisableLeft(false);
      const val = num + 1;
      if (val === 5) {
        setDisableRight(true);
      }
      setNum(val);
      setData(val);
    }
  };

  const handleSlide = (val) => {
    setDisableLeft(false);
    setDisableRight(false);
    if (val === 0) {
      setDisableLeft(true);
    } else if (val === 5) {
      setDisableRight(true);
    }
    setTrue(true);
    setNum(val);
    setData(val);
  };

  const handlePopUp = (val) => {
    setTrue(true);
    setNum(val);
    setData(val);
  };

  const handleClose = () => {
    setTrue(false);
    setNum(0);
    setEnvironment({
      idSlide: "",
      titleSlide: "",
      authorSlide: "",
      paraphSlide: "",
    });
  };

  return (
    <section className="karya">
      <SidebarComp />
      
      <img className="karya__banner" src={bannerExhibition} />

      <div className="karya__video-desktop">
        {data.map((item, i) => {
          const { title, desc, thumbnail } = item;
          return (
            <VideoExhibtion
              key={i}
              index={i}
              title={title}
              desc={desc}
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
        num={num}
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
