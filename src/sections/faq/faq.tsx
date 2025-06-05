import gsap from "gsap";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import DynamicLoader from "../../components/dynamicloader/DynamicLoader.tsx";
import GeneralQuestions from "../../components/accordion/questionsandanswers/GeneralGroomingQuestions";
import BathingQuestions from "../../components/accordion/questionsandanswers/BathingSkincareQuestions";
import HaircutsStylingQuestions from "../../components/accordion/questionsandanswers/HaircutsStylingQuestions";
import NailAndPawCareQuestions from "../../components/accordion/questionsandanswers/NailAndPawCareQuestions";
import SafetyAndComfortQuestions from "../../components/accordion/questionsandanswers/SafetyAndComfortQuestions";
import AppointmentsAndPoliciesQuestions from "../../components/accordion/questionsandanswers/AppointmentsAndPoliciesQuestions";

import { useFaqStore } from "../../store/faqStore.tsx";
import { useState } from "react";

interface componentProps {
  space: string;
}

export default function FAQ(props: componentProps) {
  const { selectedTopic, setSelectedTopic } = useFaqStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const views = {
    general: GeneralQuestions,
    bathing: BathingQuestions,
    haircut: HaircutsStylingQuestions,
    nail: NailAndPawCareQuestions,
    safety: SafetyAndComfortQuestions,
    appointments: AppointmentsAndPoliciesQuestions,
  };

  const topics = [
    "General Grooming Questions",
    "Bathing & Skin Care",
    "Haircuts & Styling",
    "Nail & Paw Care",
    "Safety & Comfort",
    "Appointments & Policies",
  ];

  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const hovercolor = "#77C2F3";
  const defaultcolor = "#1C0221";

  const handlemouseenter = (id: string, index: number) => {
    // Only animate if this button is NOT the selected one
    if (selectedIndex !== index) {
      gsap.to(id, {
        duration: 0.2,
        color: hovercolor,
        ease: "quint.easeOut",
      });
    }
  };

  const handlemouseleave = (id: string, index: number) => {
    // Only animate if this button is NOT the selected one
    if (selectedIndex !== index) {
      gsap.to(id, {
        duration: 0.2,
        color: defaultcolor,
        ease: "quint.easeOut",
      });
    }
  };

  const handleButtonClick = (topic: string, index: number) => {
    setSelectedTopic(topic);
    setSelectedIndex(index);

    // Reset all buttons to default color first
    topics.forEach((_, idx) => {
      gsap.to(`#btn${idx}`, {
        duration: 0.2,
        color: idx === index ? hovercolor : defaultcolor,
        ease: "quint.easeOut",
      });
    });
  };

  return (
    <section
      id="faq"
      style={{ marginTop: props.space }}
      className={`px-0 py-0 max-w-[1600px] mx-auto`}
    >
      <div className="flex flex-col">
        <div id="thetitleDesktop" className="flex flex-col ">
          <div className="mx-auto text-center">
            <div
              id="thetitleDesktop"
              className={isDesktop ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)]`}
              >
                FAQ
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-18`}
              >
                From Fur to Nails,We've Got Answers
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-secondary w-2/3 mx-auto mt-2" />
              </div>
            </div>

            <div
              id="thetitleMobile"
              className={isTablet || isMobile ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)] mb-1`}
              >
                FAQ
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                From Fur to
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-6`}
              >
                Nails, We've
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Got Answers
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-secondary w-2/3 mx-auto mt-1" />
              </div>
            </div>
          </div>

          <div className="mt-[70px] md:mt-[75px]">
            <div className="grid grid-cols-1fr grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 relative">
                <div className="flex flex-col md:text-left h-full">
                  <h5
                    className={`${styles.bodytext} w-full mb-3 md:mb-0 md:pb-10 text-center md:text-left`}
                  >
                    Topic
                  </h5>

                  {topics.map((topic, index) => (
                    <button
                      key={topic}
                      type="button"
                      onMouseEnter={() =>
                        handlemouseenter(`#btn${index}`, index)
                      }
                      onMouseLeave={() =>
                        handlemouseleave(`#btn${index}`, index)
                      }
                      onClick={() => handleButtonClick(topic, index)}
                      className={`grid grid-cols-12 gap-4 cursor-pointer w-full text-left mb-0 md:mb-2 rounded transition`}
                    >
                      <div
                        id={`btn${index}`}
                        className={`${
                          selectedTopic === topic
                            ? `${styles.buttontxton}`
                            : `${styles.buttontxtoff}`
                        } col-span-12 text-center md:text-left`}
                      >
                        {topic}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 md:mt-0 col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8 relative">
                <div className="flex flex-col md:flex-col w-full h-full text-center md:text-left">
                  <h5 className={`${styles.bodytext} w-full mb-4 md:pb-10`}>
                    Questions & Answers
                  </h5>
                  <DynamicLoader components={views} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
