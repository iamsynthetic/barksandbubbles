import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useBookingStore } from "../../../store/bookingStore.tsx";
import gsap from "gsap";

const Training = () => {
  const { setTrainingSelected } = useBookingStore();

  const bathingoptions = [
    {
      id: 1,
      label: "Sit, Stay, Slay (Basic Obedience)",
      price: "$75",
      bodytxt:
        "One-on-one training to master the basics sit, stay, come, and heel like a total superstar.",
    },
    {
      id: 2,
      label: "The Leash Legend",
      price: "$100",
      bodytxt:
        "Walk like a pro with private leash-training sessions no more pulling, zig-zagging, or street squirrel chases!",
    },
    {
      id: 3,
      label: "The Manners Makeover",
      price: "$150",
      bodytxt:
        "Full-behavior refresh including door etiquette, waiting for food, and not stealing your sandwich.",
    },
    {
      id: 4,
      label: "The Chill Pup Package",
      price: "$75",
      bodytxt:
        "For nervous or reactive dogs private, calm, confidence-building sessions at your pup’s pace.",
    },
    {
      id: 5,
      label: "No More Jumping Jack Pup!",
      price: "$90",
      bodytxt:
        "Private sessions to teach polite greetings and stop those enthusiastic leaps (adorable, but not on Grandma!).",
    },
    {
      id: 6,
      label: "Bye-Bye Barking Bootcamp",
      price: "$90",
      bodytxt:
        "Personalized guidance for noisy pups who need help turning down the volume.",
    },
    {
      id: 7,
      label: "Puppy Head Start Program",
      price: "$125",
      bodytxt:
        "Early social skills, potty training basics, and gentle introductions to grooming and vet visits.",
    },
    {
      id: 8,
      label: "Custom Pup Coach",
      price: "$100",
      bodytxt:
        "Have a specific challenge? We’ll tailor a one-on-one training plan just for you and your dog!",
    },
  ];

  const groomingmenuleftside = bathingoptions.slice(0, 4);
  const groomingmenurightside = bathingoptions.slice(4, 8);
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
    price: string,
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
      setTrainingSelected("", "", "");
      gsap.to(`#trainingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        boxShadow: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    } else {
      setIsActive(id);
      setTrainingSelected(label, price, body);
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
          paddingRight: ".5rem", // Ensures space for the scrollbar so content isn't cut off
        }}
      >
        <div className="col-span-12 md:col-span-6">
          {groomingmenuleftside.map((item) => (
            <button
              id={`trainingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `${styles.buttoncopy} trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer`
                  : `${styles.buttoncopy} trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
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
              id={`trainingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `${styles.buttoncopy} trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorblue`
                  : `${styles.buttoncopy} trainingoptionbtn col-span-12 w-full md:h-56 lg:h-32 mt-3 rounded-lg border-1 colorlight`
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

export default Training;
