import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import { useBookingStore } from "../../../store/bookingStore.tsx";
import gsap from "gsap";

type OptionItem = {
  id: number;
  label: string;
  price: string;
  body: string;
};

const Confirmation = () => {
  const {
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

  const [currentBtn, setCurrentBtn] = useState<number | null>(null);
  const [currentleft, setCurrentLeft] = useState<OptionItem[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // List of all booking options with unique IDs
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

  // Sync currentleft with allOptions, removing any deleted by user
  useEffect(() => {
    setCurrentLeft(allOptions);
    // eslint-disable-next-line
  }, [
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
  ]);

  const optionactivecolor = "#77c2f3";
  const optionstaticcolor = "#fff6e8";

  const handlemouseenter = (id: number) => {
    setHoveredId(id);
    if (id !== currentBtn) {
      gsap.to(`#trainingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionactivecolor,
        scale: 0.99,
        ease: "quint.easeOut",
      });
    }
  };
  const handlemouseleave = (id: number) => {
    setHoveredId(null);
    if (id !== currentBtn) {
      gsap.to(`#trainingoption-${id}`, {
        duration: 0.1,
        backgroundColor: optionstaticcolor,
        scale: 1,
        ease: "quint.easeOut",
      });
    }
  };

  // Remove item from currentleft when clicked
  const handleitemclick = (id: number) => {
    setCurrentLeft((prev) => prev.filter((item) => item.id !== id));
    setCurrentBtn(id);
  };

  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <>
      <div className="grid grid-cols-12 mt-10 mr-2 gap-3">
        <div
          className="col-span-12 w-full"
          style={{
            maxHeight: "540px",
            overflowY: "auto",
          }}
        >
          {currentleft.map((item) => (
            <button
              id={`trainingoption-${item.id}`}
              className={
                currentBtn === item.id
                  ? `trainingoptionbtn w-full col-span-12 md:h-32 mt-3 text-left rounded-lg border-1 colorblue cursor-pointer shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]`
                  : `trainingoptionbtn w-full col-span-12 md:h-32 mt-3 text-left rounded-lg border-1 colorlight cursor-pointer`
              }
              key={item.id}
              onMouseEnter={() => handlemouseenter(item.id)}
              onMouseLeave={() => handlemouseleave(item.id)}
              onClick={() => handleitemclick(item.id)}
              style={{ width: "100%" }} // Ensure each button fills the container width
            >
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} text-left ml-4 mr-1 mt-2`
                }
              >
                {item.price}
              </div>
              <div
                className={
                  isDesktop
                    ? `hidden`
                    : `${styles.mobiletitlecopy} text-left ml-4 mr-1`
                }
              >
                {item.label}
              </div>
              <div
                className={
                  isDesktop
                    ? `${styles.mobiletitlecopy} text-left ml-4 mr-1 mt-2`
                    : "hidden"
                }
              >
                {item.price} {item.label}
              </div>
              <div
                className={`${styles.mobilebodycopy} text-left ml-4 mr-4 mb-2`}
              >
                {item.body}
              </div>
              {hoveredId === item.id && (
                <span className="absolute top-2 right-4 txtlight font-semibold">
                  remove
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Confirmation;
