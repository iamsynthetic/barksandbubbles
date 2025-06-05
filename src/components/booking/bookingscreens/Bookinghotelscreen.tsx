import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
// import { useState } from "react";
// import { useBookingStore } from "../../../store/bookingStore.tsx";
// import gsap from "gsap";
import Hotel from "../bookinghotelscreen/hotel.tsx";

type SlideProps = {
  step: string;
  sectiontitle: string;
  currentslide: string;
};

const Bookinghotelscreen = ({
  step,
  sectiontitle,
  currentslide,
}: SlideProps) => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <>
      <div className={`w-full flex flex-row`}>
        <div className="flex flex-col text-center lg:text-left lg:flex-row w-full mt-2 md:mt-5 ">
          <h5
            className={
              isDesktop
                ? `${styles.pretitlecopy} mt-[-3px] flex flex-col grow-1 justify-start`
                : `${styles.hide}`
            }
          >
            STEP {step}
          </h5>
          <h5
            className={`${styles.pricecopy} mt-[-3px] flex flex-col grow-1 justify-center`}
          >
            {sectiontitle}
          </h5>
          <h5
            className={
              isDesktop
                ? `${styles.hide}`
                : `${styles.stepcopy} mt-[-3px] flex flex-col grow-1 justify-start`
            }
          >
            STEP {currentslide} OF 8
          </h5>
          <h5
            className={
              isDesktop
                ? `${styles.pretitlecopy} mt-[-3px] mr-2 flex flex-col justify-end`
                : `${styles.hide}`
            }
          >
            {currentslide} OF 8
          </h5>
        </div>
      </div>
      <Hotel />
      {/* <div className={currentBtn === 1 ? `visible` : "hidden"}>
        <Hotel />
      </div> */}
      {/* <div className={currentBtn === 2 ? `visible` : "hidden"}>
        <Brushing />
      </div>
      <div className={currentBtn === 3 ? `visible` : "hidden"}>
        <Clipping />
      </div>
      <div className={currentBtn === 4 ? `visible` : "hidden"}>
        <Nailtrimming />
      </div>
      <div className={currentBtn === 5 ? `visible` : "hidden"}>
        <Earcleaning />
      </div>
      <div className={currentBtn === 6 ? `visible` : "hidden"}>
        <Teethcleaning />
      </div>
      <div className={currentBtn === 7 ? `visible` : "hidden"}>
        <Dentalbrush />
      </div> */}
    </>
  );
};

export default Bookinghotelscreen;
