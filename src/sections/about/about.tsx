// import gsap from "gsap";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import { gsap } from "gsap";

interface componentProps {
  space: string;
}

export default function About(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  interface ScrollOptions {
    behavior: ScrollBehavior;
  }

  const hovercolor = "#FF9FA7";
  const defaultcolor = "#77C2F3";

  const handlemouseenter = (id: string) => {
    gsap.to(id, {
      duration: 0.2,
      backgroundColor: hovercolor,
      ease: "quint.easeOut",
    });
  };
  const handlemouseleave = (id: string) => {
    gsap.to(id, {
      duration: 0.2,
      backgroundColor: defaultcolor,
      ease: "quint.easeOut",
    });
  };

  const handleClick = (): void => {
    console.log("handleclick");
    const section: HTMLElement | null = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" } as ScrollOptions);
    }
  };

  return (
    <section
      id="about-us"
      style={{ marginTop: props.space }}
      className={`px-0 py-0 max-w-[1600px] mx-auto`}
    >
      <div className="flex flex-col">
        <div id="thetitleDesktop" className="flex flex-col">
          <div className="">
            <div className="grid grid-cols-1fr grid-cols-12 gap-8">
              <div
                className={
                  isDesktop
                    ? `col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative h-[500px] rounded-3xl`
                    : `${styles.hide}`
                }
              >
                <img
                  src="images/about-image.png"
                  alt="image of a man and dog sitting on the beach"
                  className={
                    isDesktop
                      ? `w-full h-auto object-fill object-right lg:object-top rounded-3xl`
                      : `${styles.hide}`
                  }
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 rounded-3xl">
                <div
                  id="thetitleDesktop"
                  className={isDesktop ? `w-full` : `${styles.hide}`}
                >
                  <h3
                    className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)]`}
                  >
                    ABOUT US
                  </h3>
                  <h4
                    className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] `}
                  >
                    Our Story,
                  </h4>
                  <h4
                    className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] mt-[-1rem]`}
                  >
                    Told With
                  </h4>
                  <h4
                    className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] mt-[-1rem]`}
                  >
                    Tails Wagging
                  </h4>
                  <p className={`${styles.bodycopy} mt-5`}>
                    Hey, I&#39;m Charles a professional dog groomer,
                    <br />
                    full-time dog lover, and probably your pup&#39;s new best
                    friend.
                    <br />
                    <br />
                    Whether your pup needs a quick bath, a full makeover, or
                    just some extra TLC, I&#39;m here for it. No hidden fees, no
                    fancy sales pitch, just honest, loving care for your furry
                    best friend. Come by, say hello, and let &#39;s get your pup
                    looking (and smelling) amazing.
                  </p>
                  <div className="mt-5">
                    <button
                      className="menubtn btn btn-secondary rounded-xl pointer-cursor border-0"
                      onMouseEnter={() => handlemouseenter(".menubtn")}
                      onMouseLeave={() => handlemouseleave(".menubtn")}
                      onClick={handleClick}
                    >
                      Book Now&nbsp;
                      <img src="images/arrow.svg" id="arrow" alt="an arrow" />
                    </button>
                  </div>
                </div>
                <div
                  id="thetitleMobile"
                  className={
                    isMobile || isTablet
                      ? `w-full flex flex-col items-center`
                      : `${styles.hide}`
                  }
                >
                  <h3
                    className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)] mb-1`}
                  >
                    ABOUT US
                  </h3>
                  <h4
                    className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
                  >
                    Our Story, Told
                  </h4>
                  <h4
                    className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-7`}
                  >
                    With Tails
                  </h4>
                  <h4
                    className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-16`}
                  >
                    Wagging
                  </h4>
                  <div className="w-full">
                    <hr className="border-t-6 rounded-2xl border-info w-2/3 mx-auto mt-4" />
                  </div>
                  <img
                    src="images/about-image.png"
                    alt="image of a man and dog sitting on the beach"
                    className={
                      isMobile || isTablet
                        ? `w-full h-auto object-fill object-right lg:object-top rounded-3xl mt-7`
                        : `${styles.hide}`
                    }
                  />
                  <p className={`${styles.bodycopy} mt-5`}>
                    Hey, I&#39;m Charles a professional dog groomer,
                    <br />
                    full-time dog lover, and probably your pup&#39;s new best
                    friend.
                    <br />
                    <br />
                    Whether your pup needs a quick bath, a full makeover, or
                    just some extra TLC, I&#39;m here for it. No hidden fees, no
                    fancy sales pitch, just honest, loving care for your furry
                    best friend. Come by, say hello, and let &#39;s get your pup
                    looking (and smelling) amazing.
                  </p>
                  <div className="w-full mt-5">
                    <button
                      className="menubtn btn btn-secondary rounded-xl pointer-cursor border-0"
                      onMouseEnter={() => handlemouseenter(".menubtn")}
                      onMouseLeave={() => handlemouseleave(".menubtn")}
                      onClick={handleClick}
                    >
                      Book Now&nbsp;
                      <img src="images/arrow.svg" id="arrow" alt="an arrow" />
                    </button>
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
