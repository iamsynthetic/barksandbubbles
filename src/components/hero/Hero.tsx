import { Mail, MapPin, MoveRight, Phone } from "lucide-react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import styles from "./styles.module.scss";

import { usePreloaderStore } from "../../store/preloaderStore";
import { useEffect, useRef } from "react";
const Hero = () => {
  const { ispreloading } = usePreloaderStore();
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const emailhovercolor = "#FFF6E8";
  const emaildefaultcolor = "#1C0221";
  const hovercolor = "#77C2F3";
  const defaultcolor = "#FFF6E8";

  const tl1 = useRef<gsap.core.Timeline | null>(null);
  // alert("its false 1");

  const theduration = 1.5;
  const theease = "Expo.easeInOut";

  useGSAP(() => {
    gsap.set(["#title1", "#title2", "#title3"], {
      opacity: 0,
      y: "+200px",
    });
    gsap.set(["#thebody"], {
      opacity: 0,
    });

    gsap.set(["#thedog"], {
      y: "+800px",
    });
  });

  const startanim = () => {
    tl1.current = gsap
      .timeline()
      .to("#title1", {
        opacity: 1,
        y: "0px",
        duration: theduration,
        delay: 0,
        ease: theease,
      })
      .to("#title2", {
        opacity: 1,
        y: "0px",
        duration: theduration,
        delay: -1.4,
        ease: theease,
      })
      .to("#title3", {
        opacity: 1,
        y: "0px",
        duration: theduration,
        delay: -1.4,
        ease: theease,
      })
      .to("#thedog", {
        // opacity: 1,
        y: "0px",
        duration: 1.5,
        delay: -1.4,
        ease: theease,
      })
      .to("#thebody", {
        opacity: 1,
        // y: "+200px",
        duration: theduration,
        delay: -1,
        ease: theease,
      });
  };

  // Call startanim when ispreloading changes
  useEffect(() => {
    if (!ispreloading) {
      startanim();
    }
  }, [ispreloading]);

  const handlemouseenter = (id: string, thecolor: string) => {
    gsap.to(id, {
      duration: 0.2,
      color: thecolor,
      ease: "quint.easeOut",
    });
  };
  const handlemouseleave = (id: string, thecolor: string) => {
    gsap.to(id, {
      duration: 0.2,
      color: thecolor,
      ease: "quint.easeOut",
    });
  };
  const handleInfoEmailOnClick = () => {
    window.open(
      "mailto:chris.tomotsugu@gmail.com?subject=Barks%20&%20Bubbles%20Isnt%20A%20Real%20Site%20But%20You%20Can%20Still%20Email%20Me%20:)&body=Hi,%20I'm%20Chris,%20I%20designed%20the%20barks%20and%20bubbles%20site,%20thanks%20for%20clicking%20but%20this%20is%20just%20a%20mock%20site,%20but%20you%20can%20send%20me%20an%20email%20saying%20how%20much%20you%20liked%20it%20if%20you%20want%20:)",
      "_self",
      "noreferrer"
    );
  };

  const handleClick = (thesection: string): void => {
    const section: HTMLElement | null = document.getElementById(thesection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" } as ScrollOptions);
    }
  };

  return (
    <div className="px-0 py-0 max-w-[1600px] h-full lg:h-[800px] mx-auto">
      <div className="h-full grid grid-cols-1fr lg:grid-cols-[1fr_610px] min-h-full">
        <div className="flex flex-col justify-center">
          <div
            id="thetitleDesktop"
            className={isDesktop ? `w-full` : `${styles.hide}`}
          >
            <h1
              id="title1"
              className={`${styles.titletxt} text-[clamp(4.125rem,6.5cqw,6.5rem)]`}
            >
              Come for
            </h1>
            <h2
              id="title2"
              className={`${styles.titletxt} text-[clamp(4.125rem,6.5cqw,6.5rem)] mt-[-2rem]`}
            >
              the bath,
            </h2>
            <h2
              id="title3"
              className={`${styles.titletxt} text-[clamp(1rem,2.6vw,2.6rem)] mt-[-1rem]`}
            >
              Stay for the belly rubs
            </h2>
          </div>
          <div
            id="thetitletablet"
            className={isTablet ? `w-full  overflow-hidden` : `${styles.hide}`}
          >
            <h1
              id="title1"
              className={`${styles.titletxt} text-[clamp(1rem,22vw,18.5vw)]`}
            >
              Come for
            </h1>
            <h2
              id="title2"
              className={`${styles.titletxt} text-[clamp(1rem,22vw,19.5vw)] mt-[-4rem]`}
            >
              the bath,
            </h2>
            <h2
              id="title3"
              className={`${styles.titletxt} text-[clamp(1rem,10vw,7.75vw)] mt-[-2rem]`}
            >
              Stay for the belly rubs
            </h2>
          </div>
          <div
            id="thetitlemobile"
            className={isMobile ? `w-full  overflow-hidden` : `${styles.hide}`}
          >
            <h1
              id="title1"
              className={`${styles.titletxt}  text-[clamp(1rem,20vw,17.5vw)]`}
            >
              Come for
            </h1>
            <h2
              id="title2"
              className={`${styles.titletxt} text-[clamp(1rem,22vw,18.5vw)] mt-[-2.75rem]`}
            >
              the bath,
            </h2>
            <h2
              id="title3"
              className={`${styles.titletxt} text-[clamp(1rem,10vw,7.25vw)] mt-[-1.5rem]`}
            >
              Stay for the belly rubs
            </h2>
          </div>

          <div id="thebody" className="mt-8 w-3/5 md:mt-10 md:w-9/10">
            <div className={`${styles.bodytxt}`}>
              Professional grooming care, all in one convenient&nbsp;place
              (we&nbsp;also&nbsp;have&nbsp;treats).
              <br />
              Located in beautiful Toronto, open 7 days a&nbsp;week.
            </div>

            <div className={`${styles.bodytxt} w-full mt-3`}>
              <div className="flex flex-row">
                <div className={`${styles.titlebodytxt} w-full`}>
                  Find Barks & Bubbles
                </div>
              </div>
            </div>
            <div className={`${styles.bodytxt} w-full`}>
              <div className="flex flex-row mt-1">
                <div className="flex flex-col">
                  <Phone />
                </div>
                <div className="flex flex-col ml-3">
                  <p>(555) 555-0123</p>
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <div className="flex flex-col ">
                  <Mail />
                </div>
                <div
                  id="btnemail"
                  className="flex flex-col ml-2 cursor-pointer"
                  onMouseEnter={() =>
                    handlemouseenter("#btnemail", emailhovercolor)
                  }
                  onMouseLeave={() =>
                    handlemouseleave("#btnemail", emaildefaultcolor)
                  }
                  onClick={() => handleInfoEmailOnClick()}
                >
                  <p>barks@barksandbubbles.com</p>
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <div className="flex flex-col">
                  <MapPin />
                </div>
                <div className="flex flex-col ml-2">
                  <p>
                    817 O'Connor Dr,
                    <br />
                    Toronto, Ontario, M4B 2S7
                  </p>
                </div>
              </div>
              <div className="flex flex-row mb-1">
                <button
                  id="btnbooknow"
                  className="btn btn-md btn-link rounded-xl mt-4 ml-[-12px]"
                  onMouseEnter={() =>
                    handlemouseenter("#btnbooknow", hovercolor)
                  }
                  onMouseLeave={() =>
                    handlemouseleave("#btnbooknow", defaultcolor)
                  }
                  onClick={() => handleClick("booking")}
                >
                  Book Now&nbsp;
                  <MoveRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end relative w-full lg:h-[800px] overflow-hidden">
          <div
            id="thedog"
            className="w-full xs:align-center lg:justify-end lg:absolute lg:bottom-0 overflow-hidden"
          >
            <img
              src="images/dog.png"
              alt="an image of a brown dog with its tongue out facing the camera"
              className="flex mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
