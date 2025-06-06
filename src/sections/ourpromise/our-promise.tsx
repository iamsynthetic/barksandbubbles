// import gsap from "gsap";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

interface componentProps {
  space: string;
}

export default function OurPromise(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <section
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
                OUR PROMISE
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-18`}
              >
                Paws Down, the Best Groom
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-info w-2/3 mx-auto mt-2" />
              </div>
            </div>

            <div
              id="thetitleMobile"
              className={isTablet || isMobile ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)] mb-1`}
              >
                OUR PROMISE
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Paws Down
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-6`}
              >
                the Best
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Groom
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-accent w-2/3 mx-auto mt-1" />
              </div>
            </div>
          </div>

          <div className="mt-[75px]">
            <div className="grid grid-cols-1fr grid-cols-12 gap-4">
              <div className="order-1 md:order-1 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative h-[320px] md:h-[220px] rounded-xl colorgreen border-2 border-[colordark]">
                <div className="flex flex-col md:flex-row items-center h-full text-center md:text-left">
                  <div className="mt-2 md:mt-0">
                    <img
                      src="images/our-promise-values.svg"
                      alt="icon of a diamond in a circle"
                    />
                  </div>
                  <div className="w-4/5">
                    <h5 className={`${styles.titlecopy} px-1 md:px-5`}>
                      Our Values
                    </h5>
                    <div className={`${styles.bodycopy} px-1 md:px-5`}>
                      we believe every dog deserves to be treated with kindness,
                      patience, and respect. Our grooming services are built on
                      a foundation of compassion, safety, and attention
                      to&nbsp;detail.
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-4 md:order-2 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative h-[320px] md:h-[220px] rounded-xl colorpink border-2 border-[colordark]">
                <div className="flex flex-col md:flex-row items-center h-full text-center md:text-left">
                  <div className="mt-2 md:mt-0">
                    <img
                      src="images/our-promise-tools.svg"
                      alt="icon of a wrench in a circle"
                    />
                  </div>
                  <div className="w-4/5">
                    <h5 className={`${styles.titlecopy} px-1 md:px-5`}>
                      Our Tools
                    </h5>
                    <div className={`${styles.bodycopy} px-1 md:px-5`}>
                      We believe great grooming starts with the right tools.
                      That&#39;s why we use top-of-the-line, professional-grade
                      equipment designed for safety, comfort,
                      and&nbsp;precision.
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-2 md:order-3 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative h-[320px] md:h-[220px] rounded-xl colorpink border-2 border-[colordark]">
                <div className="flex flex-col md:flex-row items-center h-full text-center md:text-left">
                  <div className="mt-2 md:mt-0">
                    <img
                      src="images/our-promise-people.svg"
                      alt="icon of two people figures in a circle"
                    />
                  </div>
                  <div className="w-4/5">
                    <h5 className={`${styles.titlecopy} px-1 md:px-5`}>
                      Our People
                    </h5>
                    <div className={`${styles.bodycopy} px-1 md:px-5`}>
                      Our team is made up of passionate pet lovers, skilled
                      groomers, and dedicated professionals who treat every dog
                      with the care and attention they&nbsp;deserve.
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-3 md:order-4 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative h-[320px] md:h-[220px] rounded-xl colorgreen border-2 border-[colordark]">
                <div className="flex flex-col md:flex-row items-center h-full text-center md:text-left">
                  <div className="mt-2 md:mt-0">
                    <img
                      src="images/our-promise-process.svg"
                      alt="icon of a chair in a circle"
                    />
                  </div>
                  <div className="w-4/5">
                    <h5 className={`${styles.titlecopy} px-1 md:px-5`}>
                      Our Process
                    </h5>
                    <div className={`${styles.bodycopy} px-1 md:px-5`}>
                      We&#39;ve designed our process to give you total peace of
                      mind. From easy booking and clear communication to gentle
                      handling, every step is made to be smooth, transparent,
                      and&nbsp;stress&nbsp;free.
                    </div>
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
