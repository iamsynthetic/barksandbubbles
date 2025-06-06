import Bookingslider from "../../components/booking/bookingslidler.tsx";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import Bookinggroomingscreen from "../../components/booking/bookingscreens/Bookinggroomingscreen.tsx";
import Bookingstylistscreen from "../../components/booking/bookingscreens/Bookingstylistscreen.tsx";
import Bookingpickatimescreen from "../../components/booking/bookingscreens/Bookingpickatimescreen.tsx";
import Bookingconfirmscreen from "../../components/booking/bookingscreens/Bookingconfirmscreen.tsx";
import Bookinghotelscreen from "../../components/booking/bookingscreens/Bookinghotelscreen.tsx";
import Bookingtrainingscreen from "../../components/booking/bookingscreens/Bookingtrainingscreen.tsx";
import Bookinghealthscreen from "../../components/booking/bookingscreens/Bookinghealthscreen.tsx";
import Bookingfinalconfirmationscreen from "../../components/booking/bookingscreens/Bookingfinalconfirmationscreen.tsx";

interface componentProps {
  space: string;
}

export default function AppointmentBooking(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <section
      id="booking"
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
                APPOINTMENT BOOKING
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-18`}
              >
                Snag a Spot for Your Pup&#39;s Glow-Up
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
                APPOINTMENT BOOKING
              </h3>

              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Snag a Spot
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]  leading-7`}
              >
                For
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] `}
              >
                Your Pup&#39;s
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-8`}
              >
                Glow-Up
              </h4>

              <div>
                <hr className="border-t-6 rounded-2xl border-info w-2/3 mx-auto mt-7" />
              </div>
            </div>
          </div>

          <div className="mt-[75px] w-full mx-0 overflow-clip">
            <div className="grid grid-cols-1fr grid-cols-12">
              <div className="w-full col-span-12">
                <Bookingslider visibleCount={1}>
                  <Bookinggroomingscreen
                    step="1"
                    sectiontitle="GROOMING OPTIONS"
                    currentslide="1"
                  />
                  <Bookinghotelscreen
                    step="2"
                    sectiontitle="HOTEL CARE OPTIONS"
                    currentslide="2"
                  />
                  <Bookingtrainingscreen
                    step="3"
                    sectiontitle="PRIVATE TRAINING OPTIONS"
                    currentslide="3"
                  />
                  <Bookinghealthscreen
                    step="4"
                    sectiontitle="HEALTH SERVICES OPTIONS"
                    currentslide="4"
                  />
                  <Bookingconfirmscreen
                    step="5"
                    sectiontitle="YOUR ORDER CONFIRMATION"
                    currentslide="5"
                  />
                  <Bookingstylistscreen
                    step="6"
                    sectiontitle="SELECT YOUR TRAINER"
                    currentslide="6"
                  />
                  <Bookingpickatimescreen
                    step="7"
                    sectiontitle="SELECT YOUR TIME"
                    currentslide="7"
                  />
                  <Bookingfinalconfirmationscreen
                    step="8"
                    sectiontitle="FINAL CONFIRMATION"
                    currentslide="8"
                  />
                </Bookingslider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
