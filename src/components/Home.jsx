import "../App.css";

// Components
import Carousel from "./Carousel";
import {carouselData} from "../data/carouselData.js";

export default function Home(){
  return (
    <>
      <Carousel carouselData={carouselData}/>
    </>
  )
}