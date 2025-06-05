import Accordion from "../Accordion";

export default function GeneralGroomingQuestions() {
  const accordionData = [
    {
      id: 1,
      title: "How often should my dog get their nails trimmed?",
      content:
        "Usually every 3–4 weeks! If you hear click-clack on the floors, it’s time. Long nails can affect your dog’s posture and comfort—plus, they’re not great for your hardwood floors either.",
    },
    {
      id: 2,
      title: "What if my dog hates getting their nails done?",
      content:
        "You’re not alone—many pups aren’t fans. But don’t worry, we use gentle handling, calming techniques, and lots of patience (and maybe a few tasty distractions) to make the experience as stress-free as possible.",
    },
    {
      id: 3,
      title: "Do you do anything for dry or cracked paw pads?",
      content:
        "We sure do! We offer paw balm treatments that soothe, moisturize, and protect those precious toe beans, especially helpful in hot summers and chilly winters.",
    },
  ];

  return (
    <div>
      {/* <p>Nail & Paw Care questions</p> */}
      <Accordion items={accordionData} />
    </div>
  );
}
