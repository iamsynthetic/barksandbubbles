import styles from "./styles.module.scss";
import { useBookingStore } from "../../../store/bookingStore.tsx";
import Timeslot from "../../timeslot/Timeslot.tsx";
import Calendar from "../../calendar/Calendar.tsx";

const PickATime = () => {
  const { stylistimg, stylistlabel } = useBookingStore();

  return (
    <>
      <div
        className="grid grid-cols-12 max-h-[670px] lg:max-h-max pr-[.5rem] md:pr-0 gap-5 overflow-y-auto lg:overflow-y-visible"
        style={{
          scrollbarGutter: "stable",
        }}
      >
        <div className="flex flex-col col-span-12 mt-5">
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col">
              <div
                className={`${styles.stepcopy} flex flex-col md:flex-row items-center md:items-start w-full`}
              >
                YOUR APPOINTMENT IS WITH
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-row text-left mr-1 mt-2 border-1 rounded-xl max-w-[max-content] pl-4 pr-10 py-3 w-full">
                  <img
                    className=""
                    src={`${stylistimg}`}
                    alt="image of a dog trainer"
                  />
                  <div className={`${styles.pricecopy} my-auto ml-3`}>
                    {stylistlabel}
                  </div>
                </div>
                <div className="align-middle flex flex-col justify-center text-center md:text-left max-w-2/3 md:max-w-none md:ml-5 mt-2 md:mt-0">
                  <div className={`${styles.stepcopy} flex flex-row w-full`}>
                    <div>
                      CAN’T FIND AN APPOINTMENT TIME THAT WORKS FOR YOU?
                    </div>
                  </div>
                  <div
                    className={`${styles.stepcopy} flex flex-row w-full justify-center md:justify-start md:max-w-non`}
                  >
                    GIVE US A CALL: <span className="ml-1">555-555-0123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-6">
          <div className="flex flex-col w-full items-center md:items-end md:pr-5">
            <Calendar
              backgroundColor=""
              selectedColor="#43C59E"
              selectedBg="#FFF6E8"
              boxShadow=""
            />
          </div>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-6 md:pl-10">
          <div className="flex flex-row w-full mt-0 md:mt-7">
            <Timeslot />
          </div>
        </div>
      </div>
    </>
  );
};

export default PickATime;
