import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
// import { useBookingStore } from "../../../store/bookingStore.tsx";
import Bubblebath from "../bookinggroomingscreens/bubblebath.tsx";
import Brushing from "../bookinggroomingscreens/brushing.tsx";
import Clipping from "../bookinggroomingscreens/clipping.tsx";
import Nailtrimming from "../bookinggroomingscreens/nailtrimming.tsx";
// import Earcleaning from "../bookinggroomingscreens/earcleaning.tsx";
// import Teethcleaning from "../bookinggroomingscreens/teethcleaning.tsx";
// import Dentalbrush from "../bookinggroomingscreens/dentalbrush.tsx";
import gsap from "gsap";

type SlideProps = {
  step: string;
  sectiontitle: string;
  currentslide: string;
};

const Bookinggroomingscreen = ({
  step,
  sectiontitle,
  currentslide,
}: SlideProps) => {
  // const { setSelectedOption } = useBookingStore();

  const groomingmenu = [
    { id: 1, label: "Bathing" },
    { id: 2, label: "Brushing" },
    { id: 3, label: "Clipping" },
    { id: 4, label: "Nail Trimming" },
    // { id: 5, label: "Ear Cleaning" },
    // { id: 6, label: "Teeth Cleaning" },
    // { id: 7, label: "Dental Brush" },
  ];

  const [currentBtn, setCurrentBtn] = useState(1);
  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    if (id !== currentBtn) {
      gsap.to(`#groomingmenuitem-${id}`, {
        duration: 0.1,
        backgroundColor: optionactivecolor,
        scale: 0.99,
        ease: "quint.easeOut",
      });
    }
  };
  const handlemouseleave = (id: number) => {
    if (id !== currentBtn) {
      gsap.to(`#groomingmenuitem-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        scale: 1,
        ease: "quint.easeOut",
      });
    }
  };

  const handlebuttonclick = (id: number, label: string) => {
    setCurrentBtn(id);
    // setSelectedOption(label);
    console.log(label);

    gsap.to(`.groomingmenuitem`, {
      duration: 0.1,
      backgroundColor: optionstaticcolor,
      scale: 1,
      ease: "quint.easeOut",
    });
    gsap.to(`#groomingmenuitem-${id}`, {
      duration: 0.1,
      backgroundColor: optionactivecolor,
      scale: 1,
      ease: "quint.easeOut",
    });
  };

  // const isMobile = useMediaQuery(
  //   "only screen and (min-width : 0px) and (max-width : 600px)"
  // );
  // const isTablet = useMediaQuery(
  //   "only screen and (min-width : 601px) and (max-width : 1023px)"
  // );

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
      <div className="flex flex-col lg:flex-row lg:justify-between text-center mr-2 mt-14">
        {groomingmenu.map((item) => (
          <button
            id={`groomingmenuitem-${item.id}`}
            className={
              currentBtn === item.id
                ? `${styles.buttoncopy} groomingmenuitem btn btn-secondary lg:btn-secondary rounded-lg h-8 w-full lg:w-36 cursor-pointer`
                : `${styles.buttoncopy} groomingmenuitem btn-secondary rounded-lg h-8 w-full lg:w-36 cursor-pointer`
            }
            key={item.id}
            onMouseEnter={() => handlemouseenter(item.id)}
            onMouseLeave={() => handlemouseleave(item.id)}
            onClick={() => handlebuttonclick(item.id, item.label)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={currentBtn === 1 ? `visible` : "hidden"}>
        <Bubblebath />
      </div>
      <div className={currentBtn === 2 ? `visible` : "hidden"}>
        <Brushing />
      </div>
      <div className={currentBtn === 3 ? `visible` : "hidden"}>
        <Clipping />
      </div>
      <div className={currentBtn === 4 ? `visible` : "hidden"}>
        <Nailtrimming />
      </div>
      {/* <div className={currentBtn === 5 ? `visible` : "hidden"}>
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

export default Bookinggroomingscreen;
