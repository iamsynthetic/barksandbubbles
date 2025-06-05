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

const Brushing = () => {
  const { setBrushingSelected } = useBookingStore();

  const bathingoptions = [
    {
      id: 1,
      label: "Tangle-Free & Fabulous",
      price: "$25",
      bodytxt:
        "A full coat brushing to remove knots, tangles, and loose fur perfect for keeping your pup’s coat smooth and silky.",
    },
    {
      id: 2,
      label: "Shedding Solution",
      price: "$55",
      bodytxt:
        "Say goodbye to fur-covered furniture! Our de-shedding brush out targets undercoats and reduces shedding by up to 90%.",
    },
    // {
    //   id: 3,
    //   label: "Daily Diva Brush-Up",
    //   price: "$25",
    //   bodytxt:
    //     "A quick brush and fluff for in-between grooms. Great for keeping up appearances and impressing the neighbor dogs.",
    // },
    // {
    //   id: 4,
    //   label: "Long-Hair, Don’t Care (Until You Do!)",
    //   price: "$40",
    //   bodytxt:
    //     "A specialized brushing service for long-haired breeds to keep coats flowing, healthy, and knot-free.",
    // },
    {
      id: 3,
      label: "De-Snarl Deluxe",
      price: "$35",
      bodytxt:
        "For the pups who like to roll in everything deep brushing to gently work through mats and messes.",
    },
    // {
    //   id: 6,
    //   label: "Puppy Puff-Out",
    //   price: "$40",
    //   bodytxt:
    //     "A gentle brush session for young pups to get them used to grooming (and looking super cute while doing it).",
    // },
    {
      id: 4,
      label: "Curly Coat Care",
      price: "$35",
      bodytxt:
        "Tailored brushing for poodles, doodles, and other curly-coated cuties to prevent matting and keep curls bouncy.",
    },
    // {
    //   id: 8,
    //   label: "Senior Snuggle Brush",
    //   price: "$45",
    //   bodytxt:
    //     "Extra gentle brushing for our older pals, focused on comfort, relaxation, and love.",
    // },
  ];

  const groomingmenuleftside = bathingoptions.slice(0, 2);
  const groomingmenurightside = bathingoptions.slice(2, 4);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [isActive, setIsActive] = useState(Number);

  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    gsap.to(`#brushingoption-${id}`, {
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
      gsap.to(`#brushingoption-${id}`, {
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

    gsap.to(`.brushingoptionbtn`, {
      duration: 0.1,
      backgroundColor: optionstaticcolor,
      boxShadow: "",
      scale: 1,
      ease: "quint.easeOut",
    });

    if (isActive == id) {
      setIsActive(450);
      setCurrentBtn(0);
      setBrushingSelected("", "", "");
      gsap.to(`#brushingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        boxShadow: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    } else {
      setIsActive(id);
      setBrushingSelected(label, price, body);
      gsap.to(`#brushingoption-${id}`, {
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
              id={`brushingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `brushingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer`
                  : `brushingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
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
              id={`brushingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `brushingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorblue`
                  : `brushingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorlight`
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

export default Brushing;
