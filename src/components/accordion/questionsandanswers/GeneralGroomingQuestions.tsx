import Accordion from "../Accordion";

export default function GeneralGroomingQuestions() {
  const accordionData = [
    {
      id: 1,
      title: "How often should I groom my furry little tornado?",
      content:
        "Well, it depends! Long-haired pooches may need a spa day every 4–6 weeks, while short-haired pups can stretch it out a bit longer. But brushing? That’s like daily doggy therapy—great for bonding and fur control!",
    },
    {
      id: 2,
      title: "Can I just use my shampoo on my dog?",
      content:
        "Only if you want your dog to smell like regret. Human shampoos mess with a dog's pH balance and can cause itchy skin. Go for a gentle, dog-specific shampoo unless you want your pup plotting revenge.",
    },
    {
      id: 3,
      title: "Do dogs really need haircuts?",
      content:
        "Yep! Breeds like Poodles, Shih Tzus, and Yorkies grow hair like it's their full-time job. Without regular trims, they’ll turn into walking mop monsters—and not in a cute way.",
    },
  ];

  return (
    <div>
      {/* <p>General Grooming questions</p> */}
      <Accordion items={accordionData} />
    </div>
  );
}
