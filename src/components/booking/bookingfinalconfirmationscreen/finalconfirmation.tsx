import styles from "./styles.module.scss";
import { useBookingStore } from "../../../store/bookingStore.tsx";
import { useEffect, useState } from "react";

type OptionItem = {
  id: number;
  label: string;
  price: string;
  body: string;
};

const FinalConfirmation = () => {
  const {
    resetconfirm,
    stylistimg,
    stylistlabel,
    calendarlabel,
    timeslotlabel,
    bathinglabel,
    bathingprice,
    bathingbody,
    brushinglabel,
    brushingprice,
    brushingbody,
    clippinglabel,
    clippingprice,
    clippingbody,
    nailtrimminglabel,
    nailtrimmingprice,
    nailtrimmingbody,
    earcleaninglabel,
    earcleaningprice,
    earcleaningbody,
    hotellabel,
    hotelprice,
    hotelbody,
    traininglabel,
    trainingprice,
    trainingbody,
    healthlabel,
    healthprice,
    healthbody,
    dentalbrushlabel,
    dentalbrushprice,
    dentalbrushbody,
    teethcleaninglabel,
    teethcleaningprice,
    teethcleaningbody,
  } = useBookingStore();

  const allOptions: OptionItem[] = [
    {
      id: 1,
      label: bathinglabel ?? "",
      price: bathingprice ?? "",
      body: bathingbody ?? "",
    },
    {
      id: 2,
      label: brushinglabel ?? "",
      price: brushingprice ?? "",
      body: brushingbody ?? "",
    },
    {
      id: 3,
      label: clippinglabel ?? "",
      price: clippingprice ?? "",
      body: clippingbody ?? "",
    },
    {
      id: 4,
      label: nailtrimminglabel ?? "",
      price: nailtrimmingprice ?? "",
      body: nailtrimmingbody ?? "",
    },
    {
      id: 5,
      label: earcleaninglabel ?? "",
      price: earcleaningprice ?? "",
      body: earcleaningbody ?? "",
    },
    {
      id: 6,
      label: hotellabel ?? "",
      price: hotelprice ?? "",
      body: hotelbody ?? "",
    },
    {
      id: 7,
      label: traininglabel ?? "",
      price: trainingprice ?? "",
      body: trainingbody ?? "",
    },
    {
      id: 8,
      label: healthlabel ?? "",
      price: healthprice ?? "",
      body: healthbody ?? "",
    },
    {
      id: 9,
      label: dentalbrushlabel ?? "",
      price: dentalbrushprice ?? "",
      body: dentalbrushbody ?? "",
    },
    {
      id: 10,
      label: teethcleaninglabel ?? "",
      price: teethcleaningprice ?? "",
      body: teethcleaningbody ?? "",
    },
  ].filter(
    (item) => item.label !== "" && item.price !== "" && item.body !== ""
  );

  const [showThankyou, setShowThankyou] = useState<boolean | false>();

  const handleitemclick = (showthankyoupage: boolean) => {
    setShowThankyou(showthankyoupage);
  };

  useEffect(() => {
    console.log("resetconfirm is: " + resetconfirm);
    if (resetconfirm == true) {
      setShowThankyou(false);
    }
  }, [resetconfirm]);

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
                YOUR APPOINTMENT DETAILS
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            showThankyou
              ? `hidden`
              : ` col-span-12 flex flex-col items-center ml-3 md:ml-0`
          }
        >
          <div className="flex flex-col md:flex-row rounded-xl border-1 p-8 justify-center md:gap-5 md:items-center md:max-w-[max-content] col-span-12">
            <div className="flex flex-col col-span-12 md:col-span-6 ">
              <div className="flex flex-col w-full col-span-12 md:col-span-6">
                <div className="flex flex-row text-left mt-2 w-full mb-5">
                  <img
                    className=""
                    src={`${stylistimg}`}
                    alt="image of dog trainer"
                  />
                  <div className={`my-auto ml-3`}>
                    <div className={`${styles.mobilebodycopy}`}>
                      your stylist is:
                    </div>
                    <div className={`${styles.pricecopy}`}>{stylistlabel}</div>
                  </div>
                </div>
                <div className="flex flex-col text-left w-full md:max-w-none mt-2 md:mt-0 mb-5 ">
                  <div>
                    <div>Your appointment time is:</div>
                  </div>
                  <div>
                    <div className={`${styles.pricecopy}`}>
                      {timeslotlabel
                        ? `${timeslotlabel}`
                        : "Please pick a time"}
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>Your appointment date is:</div>
                  </div>
                  <div>
                    <div className={`${styles.pricecopy}`}>
                      {calendarlabel
                        ? `${calendarlabel}`
                        : "Please pick a date"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-span-12 md:col-span-6 ">
              <div className={`flex flex-col mt-6`}>
                <div>Your services include:</div>
                {allOptions.map((item) => (
                  <div
                    id={`confirmservices-${item.id}`}
                    key={item.id}
                    className={`${styles.pricecopy}`}
                  >
                    <div>
                      {item.price} {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`${styles.stepcopy} flex flex-row w-full md:justify-start md:max-w-non mt-5`}
              >
                Thank you
              </div>
              <div className="mt-1">
                <button
                  className="btn btn-secondary rounded-xl"
                  onClick={() => handleitemclick(true)}
                >
                  confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showThankyou
            ? `flex flex-col justify-center mx-auto my-auto items-center mt-5`
            : `hidden`
        }
      >
        Thanks for confirming! This is just a mockup, that's why we didn't ask
        for an email address.
      </div>
    </>
  );
};

export default FinalConfirmation;
