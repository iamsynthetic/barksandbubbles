import Accordion from "../Accordion";

export default function GeneralGroomingQuestions() {
  const accordionData = [
    {
      id: 1,
      title: "Can I pick the style, or is it groomer’s choice?",
      content:
        "We love when you bring style inspo! Whether it’s a breed-specific cut or a custom ‘do (hello, mohawks and paw-fros!), we’ll work with you to find the perfect look for your pup’s personality and lifestyle.",
    },
    {
      id: 2,
      title: "Do all dogs need haircuts?",
      content:
        "Not all, but many do! Breeds like Poodles, Doodles, Shih Tzus, and Yorkies grow hair continuously and need regular trims to stay tidy and tangle-free. Short-haired breeds usually skip the scissors but still benefit from a good bath and brush.",
    },
    {
      id: 3,
      title: "Will my dog look silly after a haircut?",
      content:
        "Only if silly-cute counts! Our goal is to make your dog look and feel fabulous. We groom with care, style with flair, and always keep your pup’s comfort (and dignity!) top of mind.",
    },
  ];

  return (
    <div>
      {/* <p>Haircuts & Styling questions</p> */}
      <Accordion items={accordionData} />
    </div>
  );
}
