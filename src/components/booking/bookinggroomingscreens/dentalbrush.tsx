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

const Dentalbrush = () => {
  const { setDentalbrushSelected } = useBookingStore();

  const bathingoptions = [
    {
      id: 1,
      label: "The Fresh Breath Brush-Up",
      price: "$30",
      bodytxt:
        "A gentle tooth brushing with dog-safe toothpaste to kick bad breath to the curb perfect for cuddle time!",
    },
    {
      id: 2,
      label: "The Chewer’s Choice",
      price: "$45",
      bodytxt:
        "Great for dogs who love their toys a little too much this brushing helps keep their chompers strong and shiny.",
    },
    {
      id: 3,
      label: "Senior Smile Soft Brush",
      price: "$40",
      bodytxt:
        "A super-gentle brushing service for older dogs who need a little extra TLC around the gums and teeth.",
    },
    {
      id: 4,
      label: "Mint Condition Muzzle",
      price: "$40",
      bodytxt:
        "Teeth brushing with a fresh-breath spritz ideal for dogs who like to say hello face-first!",
    },
    {
      id: 5,
      label: "Little Teeth, Big Smile (Puppy)",
      price: "$40",
      bodytxt:
        "A gentle, no-pressure brushing experience for young pups learning the ropes of dental hygiene.",
    },
    {
      id: 6,
      label: "DIY Pup Pack Add-On",
      price: "$50",
      bodytxt:
        "Includes an at-home toothbrush & paste kit plus your pup’s in-groom brushing keep the clean going between visits!",
    },
  ];

  const groomingmenuleftside = bathingoptions.slice(0, 3);
  const groomingmenurightside = bathingoptions.slice(3, 6);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [isActive, setIsActive] = useState(Number);

  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    gsap.to(`#dentalbrushoption-${id}`, {
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
      gsap.to(`#dentalbrushoption-${id}`, {
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

    gsap.to(`.dentalbrushoptionbtn`, {
      duration: 0.1,
      backgroundColor: optionstaticcolor,
      boxShadow: "",
      scale: 1,
      ease: "quint.easeOut",
    });

    if (isActive == id) {
      setIsActive(450);
      setCurrentBtn(0);
      setDentalbrushSelected("", "", "");
      gsap.to(`#dentalbrushoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        boxShadow: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    } else {
      setIsActive(id);
      setDentalbrushSelected(label, price, body);
      gsap.to(`#dentalbrushoption-${id}`, {
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
        className="grid grid-cols-12 mt-10 mr-2 gap-3 max-h-[670px] lg:max-h-max overflow-y-auto lg:overflow-y-visible"
        style={{
          scrollbarGutter: "stable",
          paddingRight: ".5rem", // Ensures space for the scrollbar so content isn't cut off
        }}
      >
        <div className="col-span-12 md:col-span-6">
          {groomingmenuleftside.map((item) => (
            <button
              id={`dentalbrushoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `dentalbrushoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer`
                  : `dentalbrushoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
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
              id={`dentalbrushoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `dentalbrushoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorblue`
                  : `dentalbrushoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorlight`
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

export default Dentalbrush;
