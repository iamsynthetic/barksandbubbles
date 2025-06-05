import Accordion from "../Accordion";

export default function GeneralGroomingQuestions() {
  const accordionData = [
    {
      id: 1,
      title: "Is my dog safe during the grooming process?",
      content:
        "Yes, 100%! Your pup’s safety is our #1 priority. We use secure, professional-grade equipment, monitor dogs closely, and never leave them unattended. Think of it as a supervised spa day—without the cucumber water.",
    },
    {
      id: 2,
      title: "What if my dog gets nervous or anxious?",
      content:
        "Totally normal—and we’ve got plenty of tricks (and treats) to help! We work at your dog’s pace, offer breaks when needed, and use calm, soothing techniques to make them feel comfy and cared for from start to finish.",
    },
    {
      id: 3,
      title: "Do you separate dogs during grooming?",
      content:
        "Absolutely. Each pup has their own designated space to relax before and after grooming. No nose-to-nose contact with unfamiliar dogs—just good vibes, soft towels, and tail wags.",
    },
  ];

  return (
    <div>
      {/* <p>Safety & Comfort questions</p> */}
      <Accordion items={accordionData} />
    </div>
  );
}
