import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
// import { useState } from "react";
// import { useBookingStore } from "../../../store/bookingStore.tsx";
// import gsap from "gsap";

type SlideProps = {
  step: string;
  sectiontitle: string;
  currentslide: string;
};

const Bookingscreen = ({ step, sectiontitle, currentslide }: SlideProps) => {
  // const { setSelectedOption } = useBookingStore();

  // const groomingmenu = [
  //   { id: 1, label: "Bathing" },
  //   { id: 2, label: "Brushing" },
  //   { id: 3, label: "Clipping" },
  //   { id: 4, label: "Nail Trimming" },
  //   { id: 5, label: "Ear Cleaning" },
  //   { id: 6, label: "Teeth Cleaning" },
  //   { id: 7, label: "Dental Brush" },
  // ];

  // const [currentBtn, setCurrentBtn] = useState(1);

  // const handlebuttonclick = (id: number, label: string) => {
  //   setCurrentBtn(id);

  //   setSelectedOption(label)
  // };

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
        <div className="flex flex-col text-center md:text-left md:flex-row w-full mt-2 md:mt-5 ">
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
                ? `${styles.pretitlecopy} mt-[-3px] flex flex-col justify-end`
                : `${styles.hide}`
            }
          >
            {currentslide} OF 8
          </h5>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10 bg-orange-300">
        <div className="col-span-6">
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col1 cell 1
          </div>
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col1 cell 2
          </div>
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col1 cell 3
          </div>
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col1 cell 4
          </div>
        </div>
        <div className="col-span-6">
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col2 cell 1
          </div>
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col2 cell 2
          </div>
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col2 cell 3
          </div>
          <div className="col-span-12 w-full h-32 border-1 border-neutral">
            col2 cell 4
          </div>
        </div>
      </div>
    </>
    // <div className={`w-full ${bgcolor}`}>
    //   <div className=" flex flex-col md:flex-row h-full">
    //     <div className=" mt-2 md:mt-5">
    //       <div className={`rounded-full w-5 h-5 ${dotcolor}`} />
    //     </div>
    //     <div className="flex flex-col w-full justify-start">
    //       <h5 className={`${styles.pricecopy} px-1 mt-[-3px] md:px-5 ${color}`}>
    //         {name}
    //       </h5>
    //       <div className={`${styles.titlecopy} px-1 pt-10 md:px-5 ${color}`}>
    //         {quote}
    //       </div>
    //       <p
    //         className={`${styles.timecopy} h-full flex flex-col justify-end mb-[2rem] px-1 md:px-5 ${color}`}
    //       >
    //         {date}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Bookingscreen;
