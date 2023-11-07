import { useEffect, useState } from 'react';
import './Slider.css';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [textAnimationClass, setTextAnimationClass] = useState('fade-in');

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    setTextAnimationClass('fade-out');
    setTimeout(() => {
      setTextAnimationClass('fade-in');
    }, 2000);
  }, [slideIndex]);

  return (
    <div className="container-slider">
      {/* Largest background slider */}
      <div className="slider-largest-background">
        {[1, 2, 3].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div
              key={obj.id}
              className={`slide-larget-background ${
                isActiveSlide ? 'active-slide' : ''
              }`}
            >
              <img
                src={`/xl${index + 1}.jpg`}
                alt=""
                className="largest-backgroundImg"
              />
            </div>
          );
        })}
      </div>

      {/* Large background slider */}
      <div className="slider-background">
        {[1, 2, 3].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div
              key={obj.id}
              className={`slide-background ${
                isActiveSlide ? 'active-slide' : ''
              }`}
            >
              <img
                src={`/lg${index + 1}.jpg`}
                alt=""
                className="backgroundImg"
              />
            </div>
          );
        })}
      </div>

      {/* Small foreground slider */}
      <div className="slider-foreground relative">
        {[1, 2, 3].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div
              key={obj.id}
              className={`slide-foreground  ${
                isActiveSlide ? 'active-slide' : ''
              }`}
            >
              <img
                src={`/sm${index + 1}.jpg`}
                alt=""
                className="foregroundImg"
              />
            </div>
          );
        })}
      </div>

      {/* Text Slider */}
      <div className={`absolute ${textAnimationClass}`}>
        <div className={`slider-text font-Inter`}>
          <h1>
            {slideIndex === 1
              ? 'Namibia'
              : slideIndex === 2
              ? 'Greece'
              : 'Nepal'}
          </h1>

          <div className="divider" />

          <p className="font-Inter">
            {slideIndex === 1
              ? 'Explore the Desert'
              : slideIndex === 2
              ? 'Feel The Mediterrenian'
              : 'Adventure Awaits You'}
          </p>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot dot-active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}
