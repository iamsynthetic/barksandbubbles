import React, { useRef, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import styles from "./styles.module.scss";

interface SliderProps {
  children: React.ReactNode;
  visibleCount?: number;
}

const Slider: React.FC<SliderProps> = ({ children, visibleCount = 1 }) => {
  const hovercolor = "#FF9FA7";
  const defaultcolor = "#77C2F3";

  const handlemouseenter = (id: string, thecolor: string) => {
    gsap.to(id, {
      duration: 0.2,
      backgroundColor: thecolor,
      ease: "quint.easeOut",
    });
  };
  const handlemouseleave = (id: string, thecolor: string) => {
    gsap.to(id, {
      duration: 0.2,
      backgroundColor: thecolor,
      ease: "quint.easeOut",
    });
  };

  // Set your slide width and gap in px
  const slidePxWidth = 516;
  const slideGap = 100;

  const totalSlides = React.Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const trackPxWidth =
    totalSlides > 0
      ? slidePxWidth * totalSlides + slideGap * (totalSlides - 1)
      : 0;

  const slideToIndex = (index: number) => {
    const targetX = -(index * (slidePxWidth + slideGap));
    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.5,
      ease: "power3.inOut",
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) slideToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - visibleCount)
      slideToIndex(currentIndex + 1);
  };

  // Enable swipe with mouse and touch
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < totalSlides - visibleCount) {
        slideToIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        slideToIndex(currentIndex - 1);
      }
    },
    trackMouse: true, // enables mouse swipe
    trackTouch: true, // enables touch swipe (default)
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    gsap.set(trackRef.current, {
      x: -(currentIndex * (slidePxWidth + slideGap)),
    });
  }, [slidePxWidth, slideGap, currentIndex]);

  return (
    <div className={`w-full`} {...handlers}>
      <div className={`${styles.slidercontainer}`}>
        <div className="flex flex-col">
          <div className="w-screen">
            <div
              className={`${styles.slidertrack}`}
              ref={trackRef}
              style={{
                width: `${trackPxWidth}px`,
                display: "flex",
                gap: `${slideGap}px`,
              }}
            >
              {React.Children.map(children, (child) => (
                <div
                  className={`${styles.slide}`}
                  style={{ width: `${slidePxWidth}px` }}
                >
                  {child}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-15">
        <button
          id="goback"
          className={`${styles.buttoncopy} btn btn-secondary rounded-xl border-0 w-[4rem] mr-4`}
          onClick={handlePrev}
          onMouseEnter={() => handlemouseenter("#goback", hovercolor)}
          onMouseLeave={() => handlemouseleave("#goback", defaultcolor)}
          disabled={currentIndex === 0}
        >
          <img
            className="rotate-180"
            src="images/arrow.svg"
            id="arrow"
            alt="an arrow"
          />
        </button>
        <button
          id="gocontinue"
          className={`${styles.buttoncopy} btn btn-secondary border-0 rounded-xl w-[4rem]`}
          onClick={handleNext}
          onMouseEnter={() => handlemouseenter("#gocontinue", hovercolor)}
          onMouseLeave={() => handlemouseleave("#gocontinue", defaultcolor)}
          disabled={currentIndex >= totalSlides - visibleCount}
        >
          <img src="images/arrow.svg" id="arrow" alt="an arrow" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
