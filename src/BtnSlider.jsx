import "./Slider.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={`${direction === "next" ? "btn-slide next border" : "btn-slide prev border"} bottom-10 left-[800px]`}
    >
      {direction === "next" ? (
        <BsArrowLeftCircle className="text-[40px] ml-[150px]" />
      ) : (
        <BsArrowRightCircle className="text-[40px]" />
      )}
    </button>
  );
}
