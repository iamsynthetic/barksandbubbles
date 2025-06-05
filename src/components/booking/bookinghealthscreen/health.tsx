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

const Health = () => {
  const { setHealthSelected } = useBookingStore();

  const healthoptions = [
    {
      id: 1,
      label: "Skin & Coat Check-Up",
      price: "$25",
      bodytxt:
        "We give your pup’s skin and coat a once-over during grooming to spot dryness, irritation, or hot spots.",
    },
    {
      id: 2,
      label: "Ear & Eye Watch",
      price: "$25",
      bodytxt:
        "We check for redness, gunk, or signs of infection during every clean-up because those peepers and floppers matter!",
    },
    {
      id: 3,
      label: "Weight & Wiggle Report",
      price: "$25",
      bodytxt:
        "We’ll give you a friendly update on your pup’s body condition and energy level so you know how they’re doing overall.",
    },
    {
      id: 4,
      label: "Senior Dog Wellness Groom",
      price: "$40",
      bodytxt:
        "Gentle grooming with extra health attention for older pups think joint-friendly handling and comfort-first care.",
    },
    {
      id: 5,
      label: "The Nose-to-Tail Wellness Scan",
      price: "$40",
      bodytxt:
        "A gentle, head-to-tail assessment to flag anything unusual because your dog can’t tell you when something’s off.",
    },
    {
      id: 6,
      label: "Nail Health Check",
      price: "$50",
      bodytxt:
        "We trim with care, and we’ll let you know if there are any cracks, splits, or paw pad problems that need attention.",
    },
    {
      id: 7,
      label: "Dental Peek & Breath Check",
      price: "$25",
      bodytxt:
        "While brushing, we take a look for signs of tartar or gum issues and let you know if it’s time for a vet visit.",
    },
    {
      id: 8,
      label: "Flea & Tick Patrol",
      price: "$60",
      bodytxt:
        "We keep an eye out for hitchhikers during baths and brushing, and let you know right away if we spot any unwanted guests.",
    },
  ];

  const groomingmenuleftside = healthoptions.slice(0, 4);
  const groomingmenurightside = healthoptions.slice(4, 8);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [isActive, setIsActive] = useState(Number);

  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    gsap.to(`#healthoption-${id}`, {
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
      gsap.to(`#healthoption-${id}`, {
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

    gsap.to(`.healthoptionbtn`, {
      duration: 0.1,
      backgroundColor: optionstaticcolor,
      boxShadow: "",
      scale: 1,
      ease: "quint.easeOut",
    });

    if (isActive == id) {
      setIsActive(450);
      setCurrentBtn(0);
      setHealthSelected("", "", "");
      gsap.to(`#healthoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        boxShadow: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    } else {
      setIsActive(id);
      setHealthSelected(label, price, body);
      gsap.to(`#healthoption-${id}`, {
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
              id={`healthoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `healthoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer`
                  : `healthoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
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
              id={`healthoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `healthoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorblue`
                  : `healthoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorlight`
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

export default Health;
