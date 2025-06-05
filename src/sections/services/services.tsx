// import gsap from "gsap";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

interface componentProps {
  space: string;
}

export default function Services(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <section
      id="services"
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
                SERVICES & PRICING
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-18`}
              >
                Prices You Can Bark About
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-accent w-2/3 mx-auto mt-2" />
              </div>
            </div>

            <div
              id="thetitleMobile"
              className={isTablet || isMobile ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)] mb-1`}
              >
                SERVICES & PRICING
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Prices You Can
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-6`}
              >
                Bark About
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-accent w-2/3 mx-auto mt-7" />
              </div>
            </div>
          </div>

          <div className="mt-[75px]">
            <div className="grid grid-cols-1fr grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative h-[260px] rounded-3xl colorblue border-2 border-[colordark]">
                <div
                  className={`${styles.iconbgblue} absolute top-0 left-5 rounded-b-2xl p-3`}
                >
                  <img
                    src="images/services-heartpaw-icon.svg"
                    alt="icon of a heart with a paw inside it"
                  />
                </div>
                <div className="flex flex-col justify-end pb-3 h-full">
                  <h5 className={`${styles.titlecopy} mt-[90px] px-5`}>
                    Grooming Care
                  </h5>
                  <p className={`${styles.bodycopy} mt-3 px-5`}>
                    All packages include shampooing and blow dry.
                  </p>
                  <div className="flex flex-col">
                    <p className={`${styles.pretitlecopy} mt-3 px-5`}>
                      starting at
                    </p>
                    <p className={`${styles.pricecopy} px-5`}>$30</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative h-[260px] rounded-3xl colorpink border-2 border-[colordark]">
                <div
                  className={`${styles.iconbgpink} absolute top-0 left-5 rounded-b-2xl p-3`}
                >
                  <img
                    src="images/services-house-icon.svg"
                    alt="icon of a house"
                  />
                </div>
                <div className="flex flex-col justify-end pb-3 h-full">
                  <h5 className={`${styles.titlecopy} mt-[90px] px-5`}>
                    24 / 7 Hotel Care
                  </h5>
                  <p className={`${styles.bodycopy} mt-3 px-5`}>
                    1 to 1 human to pet attention for the duration of their
                    stay.
                  </p>
                  <div className="flex flex-col">
                    <p className={`${styles.pretitlecopy} mt-3 px-5`}>
                      starting at
                    </p>
                    <p className={`${styles.pricecopy} px-5`}>$40</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative h-[260px] rounded-3xl colorblue border-2 border-[colordark]">
                <div
                  className={`${styles.iconbgblue} absolute top-0 left-5 rounded-b-2xl p-3`}
                >
                  <img
                    src="images/services-dog-icon.svg"
                    alt="icon of a dog sitting facing the left"
                  />
                </div>
                <div className="flex flex-col justify-end pb-3 h-full">
                  <h5 className={`${styles.titlecopy} mt-[90px] px-5`}>
                    Private Training
                  </h5>
                  <p className={`${styles.bodycopy} mt-3 px-5`}>
                    1 to 1 human to pet attention for the duration of training.
                  </p>
                  <div className="flex flex-col">
                    <p className={`${styles.pretitlecopy} mt-3 px-5`}>
                      starting at
                    </p>
                    <p className={`${styles.pricecopy} px-5`}>$350</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative h-[260px] rounded-3xl colorpink border-2 border-[colordark]">
                <div
                  className={`${styles.iconbgpink} absolute top-0 left-5 rounded-b-2xl p-3`}
                >
                  <img
                    src="images/services-healthpack-icon.svg"
                    alt="icon of a bag with a plus on it"
                  />
                </div>
                <div className="flex flex-col justify-end pb-3 h-full">
                  <h5 className={`${styles.titlecopy} mt-[90px] px-5`}>
                    Health Services
                  </h5>
                  <p className={`${styles.bodycopy} mt-3 px-5`}>
                    All packages include time with a veterinarian.
                  </p>
                  <div className="flex flex-col">
                    <p className={`${styles.pretitlecopy} mt-3 px-5`}>
                      starting at
                    </p>
                    <p className={`${styles.pricecopy} px-5`}>$50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
