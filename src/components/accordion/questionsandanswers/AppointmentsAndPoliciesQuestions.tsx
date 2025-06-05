import Accordion from "../Accordion";

export default function GeneralGroomingQuestions() {
  const accordionData = [
    {
      id: 1,
      title: "How do I book an appointment—does my dog need to call?",
      content:
        "No phone skills required! You can book online, over the phone, or in person—whatever’s easiest for you (and your pup). Just don’t let your dog handle the calendar… they’re notorious for double-booking nap time.",
    },
    {
      id: 2,
      title: "What’s your cancellation policy?",
      content:
        "Life happens—we get it! Just give us at least 24 hours’ notice if you need to cancel or reschedule. Last-minute cancellations or no-shows may result in a fee (treat bribes won't work, we've tried).",
    },
    {
      id: 3,
      title: "Can I bring in my dog if they're feeling under the weather?",
      content:
        "If your pup isn’t feeling 100%, it’s best to reschedule. Grooming can be stressful on a sick dog, and we want to keep all our furry guests healthy and happy. Plus, nobody wants to catch the doggy sniffles.",
    },
  ];

  return (
    <div>
      {/* <p>Appointment & Policies questions</p> */}
      <Accordion items={accordionData} />
    </div>
  );
}
