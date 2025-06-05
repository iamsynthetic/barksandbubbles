// import gsap from "gsap";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import ContactForm from "../../components/contactform/contactform";
import { gsap } from "gsap";

interface componentProps {
  space: string;
}

export default function Contact(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 767px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const handleInfoEmailOnClick = () => {
    window.open(
      "mailto:chris.tomotsugu@gmail.com?subject=Barks%20&%20Bubbles%20Isnt%20A%20Real%20Site%20But%20You%20Can%20Still%20Email%20Me%20:)&body=Hi,%20I'm%20Chris,%20I%20designed%20the%20barks%20and%20bubbles%20site,%20thanks%20for%20clicking%20but%20this%20is%20just%20a%20mock%20site,%20but%20you%20can%20send%20me%20an%20email%20saying%20how%20much%20you%20liked%20it%20if%20you%20want%20:)",
      "_self",
      "noreferrer"
    );
  };

  const hovercolor = "#77C2F3";
  const defaultcolor = "#FFF6E8";

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

  return (
    <footer
      id="contact"
      style={{ marginTop: props.space }}
      className="w-full colordark"
    >
      <div className="mx-auto text-center pb-[75px] colorlight">
        <div id="thetitleDesktop" className={isDesktop ? `` : `${styles.hide}`}>
          <h3
            className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)]`}
          >
            CONTACT
          </h3>
          <h4
            className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-18`}
          >
            Reach Out We Don’t Bite!
          </h4>
          <div>
            <hr className="border-t-6 rounded-2xl border-info w-[500px] mx-auto mt-2" />
          </div>
        </div>

        <div
          id="thetitleMobile"
          className={isTablet || isMobile ? `` : `${styles.hide}`}
        >
          <h3
            className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)] mb-1`}
          >
            CONTACT
          </h3>
          <h4
            className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
          >
            Reach Out We
          </h4>
          <h4
            className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-6`}
          >
            Don’t Bite!
          </h4>
          <div>
            <hr className="border-t-6 rounded-2xl border-accent w-[200px] mx-auto mt-7" />
          </div>
        </div>
      </div>
      <div className={`px-0 py-0 max-w-[1600px] mx-auto colorlight`}>
        <div className="flex flex-col">
          <div id="thetitleDesktop" className="flex flex-col ">
            <div className="colordark">
              <div className="grid grid-cols-1fr grid-cols-12 gap-4 px-1 md:px-7 py-20">
                <div
                  className={
                    isDesktop || isTablet
                      ? `col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative rounded-xl pt-6 colordark`
                      : `${styles.hide}`
                  }
                >
                  <div
                    className={
                      isDesktop || isTablet
                        ? `flex flex-col md:flex-row items-center h-full text-center md:text-left`
                        : `${styles.hide}`
                    }
                  >
                    <div className="w-4/5">
                      <h5
                        className={`${styles.titlecopy} pb-5 leading-12 txtlight`}
                      >
                        Sniffing Around for Info? Contact Us Here
                      </h5>
                      <h6 className={`${styles.subtitlecopy} pb-3 txtlight`}>
                        Talk to our team today
                      </h6>

                      <div className={`${styles.bodycopy} pb-5 txtlight`}>
                        <ul>
                          <li>
                            1. Find out if we’re the right fit for you and your
                            pet.
                          </li>
                          <li>
                            2. Learn more about our team, and how we operate
                          </li>
                          <li>
                            3. Schedule a meet and greet and see our facility
                            first hand
                          </li>
                          <li>4. Get a customized quote</li>
                        </ul>
                      </div>
                      <h6 className={`${styles.subtitlecopy} pb-3 txtlight`}>
                        Find Barks & Bubbles
                      </h6>
                      <div className={`${styles.bodycopy}`}>
                        <ul className="flex flex-col">
                          <li className="flex flex-row txtlight">
                            <img
                              src="images/contact-phone.svg"
                              alt="icon of a phone"
                              className="w-6"
                            />
                            <p className="ml-3">(555) 555-0123</p>
                          </li>
                          <li className="flex flex-row txtlight">
                            <img
                              src="images/contact-envelope.svg"
                              alt="icon of an envelope"
                              className="w-6"
                            />
                            <p
                              className="footeremailbtn ml-3 cursor-pointer"
                              onMouseEnter={() =>
                                handlemouseenter(".footeremailbtn")
                              }
                              onMouseLeave={() =>
                                handlemouseleave(".footeremailbtn")
                              }
                              onClick={() => handleInfoEmailOnClick()}
                            >
                              barks@barksandbubbles.com
                            </p>
                          </li>
                          <li className="flex flex-row txtlight">
                            <img
                              src="images/contact-pin.svg"
                              alt="icon of a location pin"
                              className="w-6"
                            />
                            <p className="ml-3">
                              817 O'Connor Dr, Toronto, Ontario, M4B 2S7
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className={`${styles.bodycopy} pt-10`}>
                        <ul className="flex flex-row">
                          <li className="flex flex-col pr-4 txtlight">
                            <img
                              src="images/contact-facebook.svg"
                              alt="icon of the facebook logo"
                              className="w-10"
                            />
                          </li>
                          <li className="flex flex-row pr-6 txtlight">
                            <img
                              src="images/contact-x.svg"
                              alt="icon of the x logo"
                              className="w-10"
                            />
                          </li>
                          <li className="flex flex-row txtlight">
                            <img
                              src="images/contact-instagram.svg"
                              alt="icon of the instagram logo"
                              className="w-10"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    isDesktop || isTablet
                      ? `${styles.hide} `
                      : `justify-center mx-8 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6`
                  }
                >
                  <h5
                    className={`${styles.mobiletitlecopy} pb-5 leading-8 txtlight`}
                  >
                    Sniffing Around for Info?
                    <br />
                    Contact Us Here
                  </h5>
                </div>

                <div className="justify-center mx-3 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                  <ContactForm />
                </div>

                <div
                  className={
                    isDesktop || isTablet
                      ? `${styles.hide} `
                      : `col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative rounded-xl pt-6 pl-3 colordark`
                  }
                >
                  <div className="flex flex-col md:flex-row items-left md:items-center h-full text-left md:text-center">
                    <div className="w-4/5">
                      <h6 className={`${styles.subtitlecopy} pb-3 txtlight`}>
                        Talk to our team today
                      </h6>

                      <div className={`${styles.bodycopy} pb-5 txtlight`}>
                        <ul>
                          <li>
                            1. Find out if we’re the right fit for you and your
                            pet.
                          </li>
                          <li>
                            2. Learn more about our team, and how we operate
                          </li>
                          <li>
                            3. Schedule a meet and greet and see our facility
                            first hand
                          </li>
                          <li>4. Get a customized quote</li>
                        </ul>
                      </div>
                      <h6 className={`${styles.subtitlecopy} pb-3 txtlight`}>
                        Find Barks & Bubbles
                      </h6>
                      <div className={`${styles.bodycopy}`}>
                        <ul className="flex flex-col">
                          <li className="flex flex-row txtlight">
                            <img
                              src="images/contact-phone.svg"
                              alt="icon of a phone"
                              className="w-6"
                            />
                            <p className="ml-3">(555) 555-0123</p>
                          </li>
                          <li className="flex flex-row txtlight">
                            <img
                              src="images/contact-envelope.svg"
                              alt="icon of an envelope"
                              className="w-6"
                            />
                            <p
                              className="footeremail ml-3 cursor-pointer"
                              onMouseEnter={() =>
                                handlemouseenter(".footeremail")
                              }
                              onMouseLeave={() =>
                                handlemouseleave(".footeremail")
                              }
                              onClick={() => handleInfoEmailOnClick()}
                            >
                              barks@barksandbubbles.com
                            </p>
                          </li>
                          <li className="flex flex-row txtlight">
                            <img
                              src="images/contact-pin.svg"
                              alt="icon of a location pin"
                              className="w-6"
                            />
                            <p className="ml-3">
                              817 O'Connor Dr,
                              <br />
                              Toronto, Ontario, M4B 2S7
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className={`${styles.bodycopy} pt-10`}>
                        <ul className="flex flex-row">
                          <li
                            className="fbicon flex flex-col pr-4 txtlight cursor-pointer"
                          >
                            <img
                              src="images/contact-facebook.svg"
                              alt="icon of the facebook logo"
                              className="w-10"
                            />
                          </li>
                          <li className="xicon flex flex-row pr-6 txtlight cursor-pointer">
                            <img
                              src="images/contact-x.svg"
                              alt="icon of the x logo"
                              className="w-10"
                            />
                          </li>
                          <li className="instagramicon flex flex-row txtlight cursor-pointer">
                            <img
                              src="images/contact-instagram.svg"
                              alt="icon of the instagram logo"
                              className="w-10"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
