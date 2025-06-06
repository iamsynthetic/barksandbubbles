import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePreloaderStore } from "../../store/preloaderStore";
import { useMediaQuery } from "@uidotdev/usehooks";
import styles from "./styles.module.scss";

interface componentProps {
  space: string;
}

export default function WhyChooseUs(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const { ispreloading } = usePreloaderStore();

  useGSAP(() => {
    gsap.set([".whychooseussection"], {
      opacity: "0",
    });
    // gsap.set(["#thelogo", "#booknowbtn"], {
    //   opacity: "0",
    // });
  });

  const startanim = () => {
    const theduration = 1;
    const theease = "Expo.easeInOut";

    gsap.to(".whychooseussection", {
      opacity: 1,
      duration: theduration,
      delay: 1,
      ease: theease,
    });
  };

  useEffect(() => {
    if (!ispreloading) {
      startanim();
    }
  }, [ispreloading]);

  return (
    <section
      style={{ marginTop: props.space }}
      className={`whychooseussection px-0 py-0 max-w-[1600px] mx-auto`}
    >
      <div className="flex flex-col">
        <div id="thetitleDesktop" className="flex flex-col ">
          <div className="mx-auto w-auto ">
            <div
              id="thetitleMobile"
              className={isDesktop ? `w-full` : `${styles.hide}`}
            >
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Why Choose Us
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-accent w-2/3 mx-auto mt-3" />
              </div>
            </div>

            <div
              id="thetitleMobile"
              className={isTablet || isMobile ? `w-full` : `${styles.hide}`}
            >
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Why Choose Us
              </h4>
              {/* <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-6`}
              >
                Nails, We've
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Got Answers
              </h4> */}
              <div>
                <hr className="border-t-6 rounded-2xl border-secondary w-2/3 mx-auto mt-1" />
              </div>
            </div>
          </div>

          <div className="mt-[75px]">
            <div className="grid grid-cols-1fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              <div className="mx-auto">
                <img
                  src="images/why-choose-img1.png"
                  alt="image of a woman named Ingrid smiling"
                  className="mx-auto mb-6"
                />
                <h5 className={`${styles.titlecopy}`}>Dog to Staff Ratio</h5>
                <p className={`${styles.bodycopy}`}>
                  No assembly lines here your dog gets dedicated care from start
                  to&nbsp;finish.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  src="images/why-choose-img2.png"
                  alt="image two puppies playing on a mat"
                  className="mx-auto mb-6"
                />
                <h5 className={`${styles.titlecopy}`}>Certified Daycare</h5>
                <p className={`${styles.bodycopy}`}>
                  Our certified dog daycare means your pup is in expert hands,
                  all day, every&nbsp;day!
                </p>
              </div>
              <div className="mx-auto">
                <img
                  src="images/why-choose-img3.png"
                  alt="image of a woman walking a dog"
                  className="mx-auto mb-6"
                />
                <h5 className={`${styles.titlecopy}`}>Outside Relief Walks</h5>
                <p className={`${styles.bodycopy}`}>
                  Every pup gets regular outside relief walks, because potty
                  breaks should never be&nbsp;optional.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  src="images/why-choose-img4.png"
                  alt="image of a woman playing with a dog on the beach"
                  className="mx-auto mb-6"
                />
                <h5 className={`${styles.titlecopy}`}>Training Programs</h5>
                <p className={`${styles.bodycopy}`}>
                  Our programs are designed for every pup, from distracted
                  doodles to focused&nbsp;fetchers.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  src="images/why-choose-img5.png"
                  alt="image of a woman washing a dog"
                  className="mx-auto mb-6"
                />
                <h5 className={`${styles.titlecopy}`}>Private Grooming</h5>
                <p className={`${styles.bodycopy}`}>
                  Private grooming means your pup gets undivided attention, from
                  nose to&nbsp;tail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
