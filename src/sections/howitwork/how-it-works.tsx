// import gsap from "gsap";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

interface componentProps {
  space: string;
}

export default function HowItWorks(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const handleInfoEmailOnClick = () => {
    window.open(
      "mailto:chris.tomotsugu@gmail.com?subject=Barks%20&%20Bubbles%20Isnt%20A%20Real%20Site%20But%20You%20Can%20Still%20Email%20Me%20:)&body=Hi,%20I'm%20Chris,%20I%20designed%20the%20barks%20and%20bubbles%20site,%20thanks%20for%20clicking%20but%20this%20is%20just%20a%20mock%20site,%20but%20you%20can%20send%20me%20an%20email%20saying%20how%20much%20you%20liked%20it%20if%20you%20want%20:)",
      "_self",
      "noreferrer"
    );
  };

  return (
    <section
      style={{ marginTop: props.space }}
      className={`px-0 py-0 max-w-[1600px] mx-auto`}
    >
      <div className="flex flex-col">
        <div id="thetitleDesktop" className="flex flex-col">
          <div className="mx-auto text-center">
            <div
              id="thetitleDesktop"
              className={isTablet || isDesktop ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)]`}
              >
                HOW IT WORKS
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-18`}
              >
                We Can Come To You
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-info w-2/3 mx-auto mt-2" />
              </div>
            </div>

            <div
              id="thetitleMobile"
              className={isMobile ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)] mb-1`}
              >
                HOW IT WORKS
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                We Can
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-6`}
              >
                Come To You
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-info w-2/3 mx-auto mt-7" />
              </div>
            </div>
          </div>
          <div className="mt-[75px]">
            <div className="grid grid-cols-1fr grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4 xl:col-span-6 relative h-[500px] rounded-3xl bg-pink-500">
                <div
                  className={`${styles.bodycopy} absolute bottom-6 left-4 colorgreen border-1 border-[colordark] rounded-2xl p-3`}
                >
                  <p className={`${styles.pretitletext} text-[1rem]`}>
                    Say Hi to
                  </p>
                  <p className={`${styles.titlecopy}`}>BeeDee</p>
                </div>
                <img
                  src="images/how-it-works-img1.jpg"
                  alt="image of BeeDee the dog smiling"
                  className="w-full h-full object-cover object-right rounded-3xl"
                />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 h-[500px] pl-5 pr-10 sm:pr-1 rounded-3xl colordark decoration-[#fff6e8]">
                <h5 className={`${styles.titlecopy} mt-7 txtlight`}>
                  Schedule A Visit
                </h5>
                <p className={`${styles.bodycopy} mt-5 txtlight`}>
                  Ways You Can Schedule:
                </p>
                <ul className={`${styles.bodycopy} mt-6 list-disc mx-4`}>
                  <li className="txtlight">
                    Give us a call
                    <br />
                    123-555-1234
                  </li>
                  <li className="mt-6 txtlight">
                    Send us an email{" "}
                    <span
                      className={`${styles.linkcopy} txtlight`}
                      onClick={() => handleInfoEmailOnClick()}
                    >
                      barks@barksandbubbles.com
                    </span>
                  </li>
                  <li className="mt-6 txtlight">Fill out the contact form</li>
                  <li className="mt-6 txtlight">Fill out the Scheduler</li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 h-[500px] pl-5 pr-10 sm:pr-1 rounded-3xl colorgreen border-2 border-[colordark]">
                <h5 className={`${styles.titlecopy} mt-7`}>Sit Back & Relax</h5>
                <p className={`${styles.bodycopy} mt-5`}>
                  We take care of everything, including cleanup.
                </p>
                <ul className={`${styles.bodycopy} mt-6 list-disc mx-4`}>
                  <li>We bring the equipment needed</li>
                  <li className="mt-6">
                    Always two staff per pet, makes things fun and easy
                  </li>
                  <li className="mt-6">You pet has a great experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
