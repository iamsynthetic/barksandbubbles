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

const Bubblebath = () => {
  const { setBathingSelected } = useBookingStore();

  const bathingoptions = [
    {
      id: 1,
      label: "Bubble Bath Bliss",
      price: "$30",
      bodytxt:
        "A gentle, warm bath using premium, dog-safe shampoo to leave your pup squeaky clean and smelling paw-some.",
    },
    {
      id: 2,
      label: "Flea & Tick Scrub-A-Dub",
      price: "$50",
      bodytxt:
        "A medicated bath designed to send those pesky critters packing safely and effectively.",
    },
    {
      id: 3,
      label: "Puppy’s First Bath",
      price: "$35",
      bodytxt:
        "A gentle, positive experience for your newest furry family member. Lots of cuddles included!",
    },
    // {
    //   id: 4,
    //   label: "Skunk Be Gone Treatment",
    //   price: "$75",
    //   bodytxt:
    //     "Got skunked? No worries we’ve got the heavy-duty formula (and the nose plugs).",
    // },
    {
      id: 4,
      label: "Deshedding Detox",
      price: "$40",
      bodytxt:
        "A bath + special treatment that helps loosen and remove excess fur. Bye-bye tumbleweeds!",
    },
    // {
    //   id: 6,
    //   label: "Oatmeal & Aloe Spa Soak",
    //   price: "$50",
    //   bodytxt:
    //     "A luxurious treatment for dry or irritated skin like a spa day in a tub!",
    // },
    // {
    //   id: 7,
    //   label: "Fresh & Fluffy Finish",
    //   price: "$60",
    //   bodytxt:
    //     "Includes a bath, hand blow-dry, fluff out, and a light spritz of dog-safe cologne your pup will be ready for the pup-arazzi!",
    // },
    // {
    //   id: 8,
    //   label: "Mud & Muck Cleanup",
    //   price: "$45",
    //   bodytxt:
    //     "For those dogs who had way too much fun at the park. We’ll restore them to their clean, cuddle-ready state!",
    // },
  ];

  const groomingmenuleftside = bathingoptions.slice(0, 2);
  const groomingmenurightside = bathingoptions.slice(2, 4);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [isActive, setIsActive] = useState(Number);

  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    gsap.to(`#option-${id}`, {
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
      gsap.to(`#option-${id}`, {
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

    gsap.to(`.optionbtn`, {
      duration: 0.1,
      backgroundColor: optionstaticcolor,
      boxShadow: "",
      scale: 1,
      ease: "quint.easeOut",
    });

    if (isActive == id) {
      setIsActive(450);
      setCurrentBtn(0);
      setBathingSelected("", "", "");
      gsap.to(`#option-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        boxShadow: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    } else {
      setIsActive(id);
      setBathingSelected(label, price, body);
      gsap.to(`#option-${id}`, {
        duration: 0.1,
        backgroundColor: optionactivecolor,
        boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
        scale: 1,
        ease: "quint.easeOut",
      });
    }
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
              id={`option-${item.id}`}
              className={
                currentBtn === item.id
                  ? `optionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer`
                  : `optionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
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
              id={`option-${item.id}`}
              className={
                currentBtn === item.id
                  ? `optionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorblue`
                  : `optionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorlight`
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

export default Bubblebath;
