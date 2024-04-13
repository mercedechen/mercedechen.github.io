// React
import React, {useState} from "react";

export default function Carousel({carouselData}){

const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <img 
        src={carouselData[currentIndex].img} alt={carouselData[currentIndex].alt}
      />
    </>
  )
}