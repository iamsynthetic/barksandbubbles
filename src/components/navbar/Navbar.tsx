import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePreloaderStore } from "../../store/preloaderStore";
import styles from "./styles.module.scss";
import ReactGA from "react-ga4";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const hovercolor = "#FFF6E8";
  const defaultcolor = "#1C0221";
  const booknowhovercolor = "#FFF6E8";
  const booknowdefaultcolor = "#77C2F3";

  const { ispreloading } = usePreloaderStore();

  useGSAP(() => {
    gsap.set(
      [
        "#btntestimonials",
        "#btnfaq",
        "#btnservices",
        "#btnbooking",
        "#btncontact",
        "#btnabout",
      ],
      {
        y: "-400px",
      }
    );
    gsap.set(["#thelogo", "#booknowbtn"], {
      opacity: "0",
    });
  });

  const startanim = () => {
    const theduration = 1;
    const theease = "Expo.easeInOut";
    // const thedelay = 0.5;

    gsap.to("#thelogo", {
      opacity: 1,
      duration: theduration,
      delay: 0,
      ease: theease,
    });
    gsap.to("#btntestimonials", {
      y: "0px",
      duration: theduration,
      delay: 0.5,
      ease: theease,
    });
    gsap.to("#btnfaq", {
      y: "0px",
      duration: theduration,
      delay: 0.52,
      ease: theease,
    });
    gsap.to("#btnservices", {
      y: "0px",
      duration: theduration,
      delay: 0.65,
      ease: theease,
    });
    gsap.to("#btnbooking", {
      y: "0px",
      duration: theduration,
      delay: 0.67,
      ease: theease,
    });
    gsap.to("#btncontact", {
      y: "0px",
      duration: theduration,
      delay: 0.85,
      ease: theease,
    });
    gsap.to("#btnabout", {
      y: "0px",
      duration: theduration,
      delay: 0.87,
      ease: theease,
    });
    gsap.to("#booknowbtn", {
      opacity: 1,
      duration: theduration,
      delay: 1.3,
      ease: theease,
    });
  };

  const handleNavToggle = () => {
    if (isNavOpen === true) {
      setIsNavOpen(false);
      // document.body.style.overflowY = "hidden";
      // document.scrollbar-color: rgb(0, 0, 0, 0) #e7e7e7;
      // document.style.scrollbarColor = "rgb(0, 0, 0, 0)";
      // document.scrollbarscroller.style.scrollbarColor = "rgb(0, 0, 0, 0)";
      gsap.set(".mobilenavmenu", { opacity: 0 });
      gsap.to(".mobilenavmenu", { opacity: 1, duration: 0.3 });
    } else {
      console.log("opening navigation");
      // document.body.style.overflowY = "visible";
      gsap.set(".mobilenavmenu", { opacity: 1 });
      gsap.to(".mobilenavmenu", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setIsNavOpen(true);
        },
      });
    }
  };

  const handlemouseenter = (id: string) => {
    gsap.to(id, {
      duration: 0.2,
      color: hovercolor,
      ease: "quint.easeOut",
    });
  };
  const handlemouseleave = (id: string) => {
    gsap.to(id, {
      duration: 0.2,
      color: defaultcolor,
      ease: "quint.easeOut",
    });
  };

  const handlebooknowmouseenter = (id: string) => {
    gsap.to(id, {
      duration: 0.2,
      backgroundColor: booknowhovercolor,
      ease: "quint.easeOut",
    });
  };
  const handlebooknowmouseleave = (id: string) => {
    gsap.to(id, {
      duration: 0.2,
      backgroundColor: booknowdefaultcolor,
      ease: "quint.easeOut",
    });
  };

  const handleClick = (thesection: string): void => {
    handleNavToggle();
    const section: HTMLElement | null = document.getElementById(thesection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" } as ScrollOptions);
    }
    ReactGA.event({
      category: "main nav",
      action: "click",
      label: thesection,
    });
  };

  const handleBookNowClick = (): void => {
    const section: HTMLElement | null = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" } as ScrollOptions);
    }
    ReactGA.event({
      category: "main nav",
      action: "click",
      label: "book now in main nav",
    });
  };

  useEffect(() => {
    if (!ispreloading) {
      startanim();
    }
  }, [ispreloading]);

  return (
    <nav className="py-0 px-0 max-w-[1600px] mx-auto">
      <div className="px-0 navbar">
        <div id="thelogo" className="flex w-auto pr-10">
          <Link to="/" className="normal-case text-2xl mt-2 z-[600]">
            <img
              src="images/logo.svg"
              id="Barks and Bubbles logo"
              alt="barks and bubbles logo"
            />
          </Link>
        </div>

        <div className="grow-1 justify-center hidden lg:flex px-0 mx-0 z-[600]">
          <ul className="flex flex-cols navitems">
            <li
              id="btnabout"
              className="lg:mr-8 xl:mr-14"
              onMouseEnter={() => handlemouseenter("#btnabout")}
              onMouseLeave={() => handlemouseleave("#btnabout")}
            >
              <a href="#about-us">About Us</a>
            </li>
            <li
              id="btnservices"
              className="lg:mr-8 xl:mr-14"
              onMouseEnter={() => handlemouseenter("#btnservices")}
              onMouseLeave={() => handlemouseleave("#btnservices")}
            >
              <a href="#services">Services</a>
            </li>
            <li
              id="btntestimonials"
              className="lg:mr-8 xl:mr-14"
              onMouseEnter={() => handlemouseenter("#btntestimonials")}
              onMouseLeave={() => handlemouseleave("#btntestimonials")}
            >
              <a href="#testimonials">Testimonials</a>
            </li>
            <li
              id="btnfaq"
              className="lg:mr-8 xl:mr-14"
              onMouseEnter={() => handlemouseenter("#btnfaq")}
              onMouseLeave={() => handlemouseleave("#btnfaq")}
            >
              <a href="#faq">Faq</a>
            </li>
            <li
              id="btnbooking"
              className="lg:mr-8 xl:mr-14"
              onMouseEnter={() => handlemouseenter("#btnbooking")}
              onMouseLeave={() => handlemouseleave("#btnbooking")}
            >
              <a href="#booking">Booking</a>
            </li>
            <li
              id="btncontact"
              className=""
              onMouseEnter={() => handlemouseenter("#btncontact")}
              onMouseLeave={() => handlemouseleave("#btncontact")}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="pl-10 hidden justify-end lg:flex">
          <div className="form-control z-[600]">
            <button
              id="booknowbtn"
              className="mobilebooknow btn btn-secondary rounded-xl border-0"
              onMouseEnter={() => handlebooknowmouseenter(".mobilebooknow")}
              onMouseLeave={() => handlebooknowmouseleave(".mobilebooknow")}
              onClick={handleBookNowClick}
            >
              Book Now&nbsp;
              <img src="images/arrow.svg" id="arrow" alt="an arrow" />
            </button>
          </div>
        </div>

        <section className="mobile-menu flex grow-1 justify-end lg:hidden">
          <div
            className="hamburger-icon space-y-2 cursor-pointer"
            onMouseEnter={() => handlebooknowmouseenter(".menubtn")}
            onMouseLeave={() => handlebooknowmouseleave(".menubtn")}
            onClick={() => handleNavToggle()}
          >
            <button className="menubtn btn btn-secondary rounded-xl mr-[-16px] border-0">
              Menu
            </button>
            {/* <span className="block h-0.75 rounded-4xl w-8 animate-pulse colordark"></span>
            <span className="block h-0.75 rounded-4xl w-8 mt-[-2px] animate-pulse colordark"></span>
            <span className="block h-0.75 rounded-4xl w-8 mt-[-2px] animate-pulse colordark"></span> */}
          </div>
          <div
            className={`${
              isNavOpen ? styles.hideMenuNav : styles.showMenuNav
            } mobilenavmenu`}
          >
            <div
              className="closebtn fixed top-0 right-0 px-8 py-6 cursor-pointer"
              onMouseEnter={() => handlemouseenter(".closebtn")}
              onMouseLeave={() => handlemouseleave(".closebtn")}
              onClick={() => handleNavToggle()}
            >
              <svg
                className="h-8 w-8 text-[colordark]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="fixed left-0 ml-10 flex flex-col navitems">
              <li
                className="my-4  cursor-pointer"
                id="btnabout"
                onMouseEnter={() => handlemouseenter("#btnabout")}
                onMouseLeave={() => handlemouseleave("#btnabout")}
                onClick={() => handleClick("about-us")}
              >
                <div>About Us</div>
              </li>
              <li
                className="my-4  cursor-pointer"
                id="btnservices"
                onMouseEnter={() => handlemouseenter("#btnservices")}
                onMouseLeave={() => handlemouseleave("#btnservices")}
                onClick={() => handleClick("services")}
              >
                <div>Services</div>
              </li>
              <li
                className="my-4  cursor-pointer"
                id="btntestimonials"
                onMouseEnter={() => handlemouseenter("#btntestimonials")}
                onMouseLeave={() => handlemouseleave("#btntestimonials")}
                onClick={() => handleClick("testimonials")}
              >
                <div>Testimonials</div>
              </li>
              <li
                className="my-4  cursor-pointer"
                id="btnfaq"
                onMouseEnter={() => handlemouseenter("#btnfaq")}
                onMouseLeave={() => handlemouseleave("#btnfaq")}
                onClick={() => handleClick("faq")}
              >
                <div>FAQ</div>
              </li>
              <li
                className="my-4  cursor-pointer"
                id="btnbooking"
                onMouseEnter={() => handlemouseenter("#btnbooking")}
                onMouseLeave={() => handlemouseleave("#btnbooking")}
                onClick={() => handleClick("booking")}
              >
                <div>Booking</div>
              </li>
              <li
                className="my-4  cursor-pointer"
                id="btncontact"
                onMouseEnter={() => handlemouseenter("#btncontact")}
                onMouseLeave={() => handlemouseleave("#btncontact")}
                onClick={() => handleClick("contact")}
              >
                <div>Contact</div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
