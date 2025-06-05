import Accordion from "../Accordion";

export default function BathingSkincareQuestions() {
  const accordionData = [
    {
      id: 1,
      title: "How often should my dog get a bath—asking for a stinky friend?",
      content:
        "Generally, once a month is perfect for most pups! Too often can dry out their skin, but not enough means Eau de Wet Dog becomes their signature scent. Some breeds or lifestyles (hello, mud lovers!) may need more frequent baths.",
    },
    {
      id: 2,
      title: "My dog has sensitive skin—do you have gentle products?",
      content:
        "Absolutely! We offer hypoallergenic, oatmeal, and medicated shampoos that are kind to even the most delicate doggy dermis. Just let us know if your pup has allergies or skin conditions, and we’ll pamper accordingly.",
    },
    {
      id: 3,
      title: "Do you offer special treatments for dry or itchy skin?",
      content:
        "We sure do! From moisturizing deep-conditioning treatments to soothing aloe or tea tree rinses, we can help relieve that itch and bring back the soft, snuggly coat your pup was born to flaunt.",
    },
  ];

  return (
    <div>
      {/* <p>Bathing and Skincare Questions</p> */}
      <Accordion items={accordionData} />
    </div>
  );
}
