import styles from "./styles.module.scss";
import React, { useState, useEffect } from "react";
import { useBookingStore } from "../../store/bookingStore.tsx";

interface TimeSlot {
  time: string;
  hour: number;
}

const Timeslot: React.FC = () => {
  const { calendarlabel, setTimeslotSelected } = useBookingStore();

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const timeSlots: TimeSlot[] = [
    { time: "8:00 AM", hour: 8 },
    { time: "8:30 AM", hour: 8.5 },
    { time: "9:00 AM", hour: 9 },
    { time: "9:30 AM", hour: 9.5 },
    { time: "10:00 AM", hour: 10 },
    { time: "10:30 AM", hour: 10.5 },
    { time: "11:00 AM", hour: 11 },
    { time: "11:30 PM", hour: 11.5 },
    { time: "1:30 PM", hour: 13.5 },
    { time: "2:00 PM", hour: 14 },
    { time: "3:00 PM", hour: 15 },
    { time: "4:00 PM", hour: 16 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationKey(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTimeClick = (time: string) => {
    if (selectedTime === time) {
      setSelectedTime(null);
    } else {
      setSelectedTime(time);
      setTimeslotSelected(time);
    }
  };

  return (
    <div className="flex flex-col items-center justify-end">
      <div className="mb-8 text-center">
        <h6 className={`${styles.timetitlecopy}`}>
          {calendarlabel ? `${calendarlabel}` : "DATE NOT SELECTED"}
        </h6>
      </div>

      <div className="grid grid-cols-4 gap-6 w-full rounded-xl">
        {timeSlots.map((slot) => (
          <button
            key={slot.time}
            onClick={() => handleTimeClick(slot.time)}
            className={`
              w-18 h-18 md:w-21 md:h-21 rounded-lg font-semibold text-sm transition-all duration-500 ease-out
              border-1 border-[#1C0221] hover:border-blue-300
              ${
                selectedTime === slot.time
                  ? `${styles.bodycopy} bg-[#10b981]`
                  : "hover:bg-[#10b981]"
              }
            `}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Timeslot;
