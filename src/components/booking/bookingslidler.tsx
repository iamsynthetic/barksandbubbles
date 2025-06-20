import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import styles from "./styles.module.scss";
import { useBookingStore } from "../../store/bookingStore";

interface BookingsliderProps {
  children: React.ReactNode;
  visibleCount?: number;
}

const Bookingslider: React.FC<BookingsliderProps> = ({
  children,
  visibleCount = 1,
}) => {
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

  const slideGap = 0; // in vw
  const slideVwWidth = 100;
  const totalSlides = React.Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const { resetconfirm, setResetConfirm } = useBookingStore();

  const slideToIndex = (index: number): void => {
    const targetX: number = -(index * (slideVwWidth + slideGap));
    gsap.to(trackRef.current, {
      x: `${targetX}%`,
      duration: 0.5,
      ease: "power3.inOut",
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setResetConfirm(false);
    console.log("prevbutton resetconfirm is: " + resetconfirm);
    if (currentIndex > 0) slideToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setResetConfirm(true);
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
    trackMouse: true,
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  return (
    <>
      <div className="flex ml-2 w-full md:w-full" {...handlers}>
        <div
          className="flex w-full"
          ref={trackRef}
          style={{
            transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
            willChange: "transform",
          }}
        >
          {React.Children.map(children, (child) => (
            <div className={`${styles.slide}`}>{child}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-15">
        <button
          id="goback"
          className={`${styles.buttoncopy} btn btn-secondary border-0 rounded-xl w-[7rem] mr-4`}
          onMouseEnter={() => handlemouseenter("#goback", hovercolor)}
          onMouseLeave={() => handlemouseleave("#goback", defaultcolor)}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img
            className="rotate-180"
            src="images/arrow.svg"
            id="arrow"
            alt="an arrow"
          />
          Go Back
        </button>
        <button
          id="gocontinue"
          className={`${styles.buttoncopy} btn btn-secondary border-0 rounded-xl w-[7rem]`}
          onMouseEnter={() => handlemouseenter("#gocontinue", hovercolor)}
          onMouseLeave={() => handlemouseleave("#gocontinue", defaultcolor)}
          onClick={handleNext}
          disabled={currentIndex >= totalSlides - visibleCount}
        >
          Continue <img src="images/arrow.svg" id="arrow" alt="an arrow" />
        </button>
      </div>
    </>
  );
};

export default Bookingslider;
