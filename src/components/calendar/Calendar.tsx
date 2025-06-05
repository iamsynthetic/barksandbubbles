import { useState, useRef } from "react";
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBookingStore } from "../../store/bookingStore.tsx";

const getDaysInMonth = (date: Date): (Date | null)[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.

  const days: (Date | null)[] = [];

  // Add days from previous month (only if month doesn't start on Sunday)
  if (startingDayOfWeek > 0) {
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthLastDay - i));
    }
  }

  // Add days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  // Add days from next month to complete the grid (only if needed)
  const totalDaysShown = days.length;
  const weeksNeeded = Math.ceil(totalDaysShown / 7);
  const totalCellsNeeded = weeksNeeded * 7;
  const remainingCells = totalCellsNeeded - totalDaysShown;

  for (let day = 1; day <= remainingCells; day++) {
    days.push(new Date(year, month + 1, day));
  }

  return days;
};

const Calendar = ({
  backgroundColor = "#ffffff",
  textColor = "#374151",
  selectedColor = "#ffffff",
  selectedBg = "#10b981",
  borderColor = "",
  hoverColor = "#43C59E",
  borderRadius = "12px",
  fontSize = "14px",
  headerPadding = "24px",
  boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  dateBoxHeight = "48px",
}) => {
  const { setCalendarSelected } = useBookingStore();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = getDaysInMonth(currentDate);

  const changeMonth = (direction: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);

    // Simple transition without GSAP
    setCurrentDate(newDate);
    setIsAnimating(false);
  };

  const handleDateClick = (date: Date | null) => {
    if (!date) return;

    // Set the selected date
    setSelectedDate(date);

    // Send to booking store
    const bookingdate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setCalendarSelected(bookingdate);

    // if (!date) return;
    // setSelectedDate(date);
    //   const bookingdate =
    //     date.toLocaleDateString("en-US", {
    //       weekday: "long",
    //       year: "numeric",
    //       month: "long",
    //       day: "numeric",
    //     }) || "";
    //   alert("booking date is: " + bookingdate);
    //   setCalendarSelected(bookingdate);
    //send this to the store

    // if (
    //   selectedDate &&
    //   selectedDate.getDate() === date.getDate() &&
    //   selectedDate.getMonth() === date.getMonth() &&
    //   selectedDate.getFullYear() === date.getFullYear()
    // ) {
    //   setSelectedDate(null);
    // } else {
    //   setSelectedDate(date);

    // const bookingdate =
    //   date.toLocaleDateString("en-US", {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    //   }) || "";
    // alert("booking date is: " + bookingdate);
    // setCalendarSelected(bookingdate);
    //send this to the store
    // }
  };

  const isSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isCurrentMonth = (date: Date | null) => {
    if (!date) return false;
    return date.getMonth() === currentDate.getMonth();
  };

  const calendarStyles = {
    minWidth: "330px",
    maxWidth: "580px",
    maxHeight: "450px",
    width: "100%",
  };

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: headerPadding,
    backgroundColor: "transparent",
    color: textColor,
    position: "relative" as const,
    zIndex: 2,
    marginBottom: "8px",
  };

  // const monthYearStyles = {
  //   fontSize: "20px",
  //   fontWeight: 600,
  //   margin: "0",
  //   textTransform: "uppercase" as const,
  //   letterSpacing: "0.05em",
  // };

  const arrowButtonStyles = {
    background: "none",
    border: "none",
    color: textColor,
    cursor: "pointer",
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s",
  };

  const weekdaysStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    // width: "97.4%",
    backgroundColor: "transparent",
    // border: `1px solid ${borderColor}`,
    borderBottom: "none", // Removed bottom border
    borderRadius: `${borderRadius} ${borderRadius} 0 0`,
    overflow: "hidden",
    boxShadow: boxShadow,
  };

  const weekdayStyles = {
    textAlign: "center" as const,
    padding: "16px 4px",
    fontSize: "12px",
    fontWeight: 600,
    color: "#9ca3af",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const datesContainerStyles = {
    position: "relative" as const,
    overflow: "hidden",
    // border: `1px solid ${borderColor}`,
    // borderTop: "none",
    // borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
    boxShadow: boxShadow,
  };

  const datesGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    backgroundColor: borderColor,
    gap: "1px",
    // Remove padding to eliminate right gap
    padding: "1px 1px 1px 1px",
  };

  const dayButtonStyles = (date: Date | null, index: number) => {
    const isFirstColumn = index % 7 === 0;
    const isLastColumn = index % 7 === 6;
    const isFirstRow = index < 7;
    const isLastRow = index >= days.length - 7;

    // Calculate border radius for corner cells
    let borderRadiusValue = "0";
    if (isFirstRow && isFirstColumn) {
      // Top-left corner - no radius needed as it's handled by weekdays container
      borderRadiusValue = "0";
    } else if (isLastRow && isFirstColumn) {
      // Bottom-left corner
      borderRadiusValue = `0 0 0 ${borderRadius}`;
    } else if (isLastRow && isLastColumn) {
      // Bottom-right corner
      borderRadiusValue = `0 0 ${borderRadius} 0`;
    }

    return {
      border: "none",
      background: isSelected(date) ? selectedBg : backgroundColor,
      color: isSelected(date)
        ? selectedColor
        : !isCurrentMonth(date)
        ? "#d1d5db"
        : date
        ? textColor
        : "transparent",
      cursor: date ? "pointer" : "default",
      fontSize,
      fontWeight: isToday(date) ? 600 : isCurrentMonth(date) ? 500 : 400,
      position: "relative" as const,
      transition: "all 0.2s ease",
      width: "100%",
      height: dateBoxHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: borderRadiusValue,
      margin: "0",
      boxSizing: "border-box" as const,
    };
  };

  return (
    <div style={calendarStyles}>
      {/* Header */}
      <div style={headerStyles}>
        <button
          style={arrowButtonStyles}
          onClick={() => changeMonth(-1)}
          disabled={isAnimating}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = hoverColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <ChevronLeft size={20} />
        </button>

        <h6 className={`${styles.bodycopy}`}>
          {monthNames[currentDate.getMonth()].slice(0, 3).toUpperCase()}
        </h6>

        <button
          style={arrowButtonStyles}
          onClick={() => changeMonth(1)}
          disabled={isAnimating}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = hoverColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Weekdays */}
      <div style={weekdaysStyles}>
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} style={weekdayStyles}>
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div style={datesContainerStyles}>
        <div ref={calendarRef} style={datesGridStyles}>
          {days.map((date, index) => (
            <button
              key={index}
              style={dayButtonStyles(date, index)}
              onClick={() => handleDateClick(date)}
              disabled={!date}
              onMouseEnter={(e) => {
                if (date && !isSelected(date)) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    hoverColor;
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                if (date && !isSelected(date)) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    backgroundColor;
                  (e.currentTarget as HTMLButtonElement).style.color =
                    !isCurrentMonth(date) ? "#d1d5db" : textColor;
                }
              }}
            >
              {date && date.getDate()}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Date Display */}
      {/* {selectedDate && (
        <div
          style={{
            padding: "16px",
            backgroundColor: "#f9fafb",
            borderTop: `1px solid ${borderColor}`,
            fontSize: "14px",
            color: textColor,
            textAlign: "center" as const,
          }}
        >
          Selected:{" "}
          {selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      )} */}
    </div>
  );
};

export default Calendar;
