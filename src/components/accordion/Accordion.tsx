// import React, { useState } from "react";
// import styles from "./styles.module.scss";
// import gsap from "gsap";

type AccordionItemProps = {
  item: {
    id: string | number;
    title: React.ReactNode;
    content: React.ReactNode;
  };
  isOpen: boolean;
  toggleAccordion: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div className="accordion-item">
      <div
        className={
          isOpen
            ? `accordion-header flex flex-row justify-between items-center p-0 cursor-pointer`
            : `accordion-header flex flex-row justify-between items-center p-5 cursor-pointer`
        }
        // onMouseEnter={() => handlemouseenter(item.id)}
        // onMouseLeave={() => handlemouseleave(item.id)}
        onClick={toggleAccordion}
      >
        {item.title}
        <img
          className={isOpen ? `rotate-0` : `rotate-270`}
          src="images/faq-chevron-right.svg"
          alt="an arrow"
        />
      </div>
      {isOpen && (
        <div className={`${styles.bodycopy} text-left`}>{item.content}</div>
      )}
    </div>
  );
};

// type AccordionProps = {
//   items: {
//     id: string | number;
//     title: React.ReactNode;
//     content: React.ReactNode;
//   }[];
// };

// const Accordion: React.FC<AccordionProps> = ({ items }) => {
//   const [openItem, setOpenItem] = useState<string | number | null>(null);
//   const toggleAccordion = (id: string | number) => {
//     setOpenItem((prevOpenItem) => {
//       // When opening a new item, reset all others to default color
//       items.forEach((item) => {
//         if (item.id !== id) {
//           gsap.to(`.btn${item.id}`, {
//             duration: 0.2,
//             // backgroundColor: defaultcolor,
//             scale: 1,
//             ease: "quint.easeOut",
//           });
//         }
//       });
//       return prevOpenItem === id ? null : id;
//     });
//   };

//   return (
//     <div>
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className={
//             openItem === item.id
//               ? `${styles.titlecopy} btn${item.id} bg-[#77c2f3] rounded-md border-1 border-[colordark] mb-3 p-5 h-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] btn${item.id}`
//               : `${styles.titlecopy} btn${item.id} rounded-md border-1 border-[colordark] mb-3`
//           }
//         >
//           <AccordionItem
//             key={item.id}
//             item={item}
//             isOpen={openItem === item.id}
//             toggleAccordion={() => toggleAccordion(item.id)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";

// ...AccordionItem definition remains unchanged...

type AccordionProps = {
  items: {
    id: string | number;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItem, setOpenItem] = useState<string | number | null>(null);

  // Reset all items to default state when items prop changes
  useEffect(() => {
    setOpenItem(null);
    items.forEach((item) => {
      gsap.to(`.btn${item.id}`, {
        duration: 0.2,
        backgroundColor: "",
        scale: 1,
        ease: "quint.easeOut",
      });
    });
  }, [items]);

  const toggleAccordion = (id: string | number) => {
    setOpenItem((prevOpenItem) => {
      // When opening a new item, reset all others to default color
      items.forEach((item) => {
        if (item.id !== id) {
          gsap.to(`.btn${item.id}`, {
            duration: 0.2,
            // backgroundColor: defaultcolor,
            scale: 1,
            ease: "quint.easeOut",
          });
        }
      });
      return prevOpenItem === id ? null : id;
    });
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className={
            openItem === item.id
              ? `${styles.titlecopy} btn${item.id} bg-[#77c2f3] rounded-md border-1 border-[colordark] mb-3 p-5 h-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] btn${item.id}`
              : `${styles.titlecopy} btn${item.id} rounded-md border-1 border-[colordark] mb-3`
          }
        >
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItem === item.id}
            toggleAccordion={() => toggleAccordion(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
