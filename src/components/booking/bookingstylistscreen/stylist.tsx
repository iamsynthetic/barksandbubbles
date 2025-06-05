import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useBookingStore } from "../../../store/bookingStore.tsx";
import gsap from "gsap";

const Stylist = () => {
  const { setStylistSelected } = useBookingStore();

  const stylistoptions = [
    {
      id: 1,
      label: "Michelle",
      img: "/images/stylist-img1.png",
      alt: "an image of a woman named Michelle, wearing glasses and facing the left",
      bodytxt:
        "One-on-one training to master the basics sit, stay, come, and heel like a total superstar.",
    },
    {
      id: 2,
      label: "Ingrid",
      img: "/images/stylist-img2.png",
      alt: "an image of a woman named Ingrid, smiling at the camera",
      bodytxt:
        "Walk like a pro with private leash-training sessions no more pulling, zig-zagging, or street squirrel chases!",
    },
    {
      id: 3,
      label: "Jason",
      img: "/images/stylist-img3.png",
      alt: "an image of a man named Jason, wearing a baseball hat",
      bodytxt:
        "Full-behavior refresh including door etiquette, waiting for food, and not stealing your sandwich.",
    },
    {
      id: 4,
      label: "Patrick",
      img: "/images/stylist-img4.png",
      alt: "an image of a man named Patrick, facing the camera",
      bodytxt:
        "For nervous or reactive dogs private, calm, confidence-building sessions at your pup’s pace.",
    },
    {
      id: 5,
      label: "Selena",
      img: "/images/stylist-img5.png",
      alt: "an image of a woman named Selena wearing glasses and smiling",
      bodytxt:
        "Private sessions to teach polite greetings and stop those enthusiastic leaps (adorable, but not on Grandma!).",
    },
    {
      id: 6,
      label: "Rae",
      img: "/images/stylist-img6.png",
      alt: "an image of woman named Rae facing the right",
      bodytxt:
        "Personalized guidance for noisy pups who need help turning down the volume.",
    },
  ];

  const groomingmenuleftside = stylistoptions.slice(0, 3);
  const groomingmenurightside = stylistoptions.slice(3, 6);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [isActive, setIsActive] = useState(Number);

  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    gsap.to(`#trainingoption-${id}`, {
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
      gsap.to(`#trainingoption-${id}`, {
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
    img: string,
    body: string
  ) => {
    setCurrentBtn(id);

    gsap.to(`.trainingoptionbtn`, {
      duration: 0.1,
      backgroundColor: optionstaticcolor,
      boxShadow: "",
      scale: 1,
      ease: "quint.easeOut",
    });

    if (isActive == id) {
      setIsActive(450);
      setCurrentBtn(0);
      setStylistSelected("", "", "");
      gsap.to(`#trainingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        boxShadow: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    } else {
      setIsActive(id);
      setStylistSelected(label, img, body);
      gsap.to(`#trainingoption-${id}`, {
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
          paddingRight: ".5rem",
        }}
      >
        <div className="col-span-12 md:col-span-6">
          {groomingmenuleftside.map((item) => (
            <button
              id={`trainingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer`
                  : `trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
              }
              key={item.id}
              onMouseEnter={() => handlemouseenter(item.id)}
              onMouseLeave={() => handlemouseleave(item.id)}
              onClick={() =>
                handleitemclick(item.id, item.label, item.img, item.bodytxt)
              }
            >
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} flex flex-row text-left ml-4 mr-1 mt-2`
                }
              >
                <img src={item.img} alt={item.alt} />
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
                    ? `${styles.mobiletitlecopy} flex flex-row text-left ml-4 mr-1 mt-2`
                    : "hidden"
                }
              >
                <img src={item.img} alt={item.alt} />{" "}
                <div className="mt-6 ml-3">{item.label}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="col-span-12 md:col-span-6">
          {groomingmenurightside.map((item) => (
            <button
              id={`trainingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorblue`
                  : `trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorlight`
              }
              key={item.id}
              onMouseEnter={() => handlemouseenter(item.id)}
              onMouseLeave={() => handlemouseleave(item.id)}
              onClick={() =>
                handleitemclick(item.id, item.label, item.img, item.bodytxt)
              }
            >
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} flex flex-row text-left ml-4 mr-4 mt-2`
                }
              >
                <img src={item.img} alt={item.alt} />
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
                    ? `${styles.mobiletitlecopy} flex flex-row text-left ml-4 mr-4 mt-2`
                    : `hidden`
                }
              >
                <img src={item.img} alt={item.alt} />{" "}
                <div className="mt-6 ml-3">{item.label}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stylist;
