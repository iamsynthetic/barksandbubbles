import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useBookingStore } from "../../../store/bookingStore.tsx";
import gsap from "gsap";

// type SlideProps = {
//   step: string;
//   sectiontitle: string;
//   currentslide: string;
// };

// const bubblebath = ({ step, sectiontitle, currentslide }: SlideProps) => {

const Clipping = () => {
  const { setClippingSelected } = useBookingStore();

  const bathingoptions = [
    {
      id: 1,
      label: "The Pup-Cut",
      price: "$25",
      bodytxt:
        "A full-body haircut tailored to your dog’s breed, lifestyle, and personality because style matters.",
    },
    {
      id: 2,
      label: "Face-Framer Trim",
      price: "$25",
      bodytxt:
        "Snip-snip around the eyes, chin, and ears for a clear, cute, and kissable face.",
    },
    // {
    //   id: 3,
    //   label: "Ear-mazing Trim",
    //   price: "$25",
    //   bodytxt:
    //     "Trimming around and inside the ears for better airflow and hygiene (especially for floppy-eared friends!).",
    // },
    {
      id: 3,
      label: "Designer Doggie Do’s",
      price: "$60",
      bodytxt:
        "Want a mohawk? Lion cut? Pom-poms? We’re up for fun and funky styles just say the word!",
    },
    // {
    //   id: 5,
    //   label: "Tidy-Up Trim",
    //   price: "$40",
    //   bodytxt:
    //     "Just the essentials! Face, feet, and fanny cleanup to keep things neat between full grooms.",
    // },
    // {
    //   id: 6,
    //   label: "Booty Beautification",
    //   price: "$35",
    //   bodytxt:
    //     "A sanitary clip that keeps things clean and fresh your pup’s rear end will thank you.",
    // },
    {
      id: 4,
      label: "The Summer Shave-Down",
      price: "$45",
      bodytxt:
        "Short and cool for the warmer months. Great for heavy-coated dogs who need a seasonal refresh.",
    },
    // {
    //   id: 8,
    //   label: "Puppy’s First Trim",
    //   price: "$40",
    //   bodytxt:
    //     "A gentle, no-pressure intro to clippers and scissors for first-timers. Lots of treats and tail wags included!",
    // },
  ];

  const groomingmenuleftside = bathingoptions.slice(0, 2);
  const groomingmenurightside = bathingoptions.slice(2, 4);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [isActive, setIsActive] = useState(Number);

  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    gsap.to(`#clippingoption-${id}`, {
      duration: 0.1,
      backgroundColor: optionactivecolor,
      scale: 0.99,
      ease: "quint.easeOut",
    });
  };

  const handlemouseleave = (id: number) => {
    if (id == currentBtn) {
      return;
    } else {
      gsap.to(`#clippingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        scale: 1,
        ease: "quint.easeOut",
      });
    }
  };

  const handleitemclick = (
    id: number,
    label: string,
    price: string,
    body: string
  ) => {
    setCurrentBtn(id);

    gsap.to(`.clippingoptionbtn`, {
      duration: 0.1,
      backgroundColor: optionstaticcolor,
      boxShadow: "",
      scale: 1,
      ease: "quint.easeOut",
    });

    if (isActive == id) {
      setIsActive(450);
      setCurrentBtn(0);
      setClippingSelected("", "", "");
      gsap.to(`#clippingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        boxShadow: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    } else {
      setIsActive(id);
      setClippingSelected(label, price, body);
      gsap.to(`#clippingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionactivecolor,
        boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
        scale: 1,
        ease: "quint.easeOut",
      });
    }
  };

  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <>
      <div
        className="grid grid-cols-12 mt-10 mr-2 gap-3 max-h-[400px] lg:max-h-max overflow-y-auto lg:overflow-y-visible"
        style={{
          scrollbarGutter: "stable",
          paddingRight: ".5rem", // Ensures space for the scrollbar so content isn't cut off
        }}
      >
        <div className="col-span-12 md:col-span-6">
          {groomingmenuleftside.map((item) => (
            <button
              id={`clippingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `clippingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer`
                  : `clippingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
              }
              key={item.id}
              onMouseEnter={() => handlemouseenter(item.id)}
              onMouseLeave={() => handlemouseleave(item.id)}
              onClick={() =>
                handleitemclick(item.id, item.label, item.price, item.bodytxt)
              }
            >
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} text-left ml-4 mr-1 mt-2`
                }
              >
                {item.price}
              </div>
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} text-left ml-4 mr-1`
                }
              >
                {item.label}
              </div>
              <div
                className={
                  isDesktop
                    ? `${styles.mobiletitlecopy} text-left ml-4 mr-1 mt-2`
                    : "hidden"
                }
              >
                {item.price} {item.label}
              </div>
              <div
                className={`${styles.mobilebodycopy} text-left ml-4 mr-4 mb-2`}
              >
                {item.bodytxt}
              </div>
            </button>
          ))}
        </div>
        <div className="col-span-12 md:col-span-6">
          {groomingmenurightside.map((item) => (
            <button
              id={`clippingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `clippingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorblue`
                  : `clippingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorlight`
              }
              key={item.id}
              onMouseEnter={() => handlemouseenter(item.id)}
              onMouseLeave={() => handlemouseleave(item.id)}
              onClick={() =>
                handleitemclick(item.id, item.label, item.price, item.bodytxt)
              }
            >
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} text-left ml-4 mr-4 mt-2`
                }
              >
                {item.price}
              </div>
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} text-left ml-4 mr-4 mt-2`
                }
              >
                {item.label}
              </div>
              <div
                className={
                  isDesktop
                    ? `${styles.mobiletitlecopy} text-left ml-4 mr-4 mt-2`
                    : `hidden`
                }
              >
                {item.price} {item.label}
              </div>
              <div
                className={`${styles.mobilebodycopy} text-left ml-4 mr-4 mt-1 mb-2`}
              >
                {item.bodytxt}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clipping;
