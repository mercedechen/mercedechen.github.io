// React
import React, {useState, useEffect} from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Carousel({carouselData}){
  const [currentImg, setCurrentImg] = useState(0);
  const [pauseAutoPlay, setPauseAutoPlay] = useState(false);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      !pauseAutoPlay && setCurrentImg((prevImg) => (prevImg + 1) % carouselData.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  // Next and Prev
  const handleNext = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % carouselData.length);
    setPauseAutoPlay(false);
  }

  const handlePrev = () => {
    setCurrentImg((prevImg) => ((prevImg - 1) + carouselData.length) % carouselData.length);
    setPauseAutoPlay(false);
  }

  return (
    <>
      <div className="arrow">
        <button onClick={handlePrev}><GoArrowLeft/></button>
        <button onClick={handleNext}><GoArrowRight/></button>
      </div>
      <img src={carouselData[currentImg].img} alt={carouselData[currentImg].alt} className="carousel-img"/>
    </>
  )
}