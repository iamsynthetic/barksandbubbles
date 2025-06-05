"use client";
// import { useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CountUp from "react-countup";
import { usePreloaderStore } from "../../store/preloaderStore";
// import { useAppContext } from "../../context";
export default function Preloader() {
  const { isfirstload, setIsfirstload, setIsPreloading } = usePreloaderStore();
  // const { setIsPreloading, isfirstload, setIsfirstload } = useAppContext();

  // const tl1 = useRef<gsap.core.Timeline | null>(null);

  // const setloading = () => {
  //   gsap.to(".loadingtext", {
  //     opacity: 1,
  //     duration: 0.25,
  //     ease: "quint.easeOut",
  //   });
  // };
  useGSAP(() => {
    const theduration = 1;
    const theease = "Expo.easeInOut";

    if (isfirstload == true) {
      gsap.set(".loadingtext", {
        opacity: 0,
        duration: 0,
      });

      gsap.to(".loadingtext", {
        opacity: 1,
        duration: theduration,
        delay: 0,
        ease: theease,
      });

      gsap.to(".bar", {
        height: "880px",
        duration: theduration,
        delay: 1.75,
        ease: theease,
        onComplete: () => {
          finishedbars();
        },
      });

      gsap.to(".loadingtext", {
        opacity: 0,
        duration: theduration,
        delay: 1.95,
        ease: theease,
      });

      // tl1.current = gsap
      //   .timeline()

      //   .set(".loadingtext", {
      //     opacity: 0,
      //     duration: 0,
      //   })
      //   .to(".loadingtext", {
      //     opacity: 1,
      //     // y: "-200px",
      //     duration: 0.25,
      //     delay: 0.3,
      //     ease: "quint.easeOut",
      //   })
      //   .to(".loadingtext", {
      //     opacity: 1,
      //     // y: "-200",
      //     duration: 0.75,
      //     delay: 1.5,
      //     ease: "quint.easeInOut",
      //   })
      //   .to(".bar", {
      //     height: "880px",
      //     duration: 1,
      //     delay: -0.9,
      //     ease: "Expo.easeInOut",
      //   })
      //   .to(".loadingtext", {
      //     opacity: 0,
      //     // duration: 0.25,
      //     duration: 1,
      //     delay: -1,
      //     ease: "Quint.easeOut",
      //     onComplete: () => {
      //       finishedbars();
      //     },
      //   });
    }
  });

  function finishedbars() {
    // console.log("finishedbars");
    // alert("finishedbars");
    setIsfirstload(false);
    setIsPreloading(false);
    // alert("isfirstload " + isfirstload);
    // alert("ispreloading " + ispreloading);
    document.body.classList.remove("hidescroll");
    document.body.classList.add("showscroll");
  }

  return (
    <>
      <div
        className={`${styles.preloadertitle} loadingtext text-[clamp(4.125rem,6.5cqw,6.5rem)]`}
      >
        Loading
      </div>
      <div className={`${styles.preloadercounter} loadingtext`}>
        <CountUp end={100} duration={2} />
      </div>
      <div className={`${styles.overlay}`}>
        <div className={`${styles.bar} bar`}></div>
        {/* <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div>
        <div className={`${styles.bar} bar`}></div> */}
      </div>
    </>
  );
}
