import Treats from "./components/treats/treats.tsx";
import Hero from "./components/hero/Hero.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import About from "./sections/about/about.tsx";
import AppointmentBooking from "./sections/booking/appointmentbooking.tsx";
import Contact from "./sections/contact/contact.tsx";
import FAQ from "./sections/faq/faq.tsx";
import HowItWorks from "./sections/howitwork/how-it-works.tsx";
import OurPromise from "./sections/ourpromise/our-promise.tsx";
import Services from "./sections/services/services.tsx";
import Testimonials from "./sections/testimonials/testimonials.tsx";
import WhyChooseUs from "./sections/whychooseus/why-choose-us.tsx";

import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-QD52J52E8H");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title:"app.tsx"})
  }, []);
  return (
    <div className="mx-auto px-0 py-0 w-screen hidescroll">
      <div className="absolute w-full z-300">
        <Treats />
      </div>
      <div id="section-with-pink-bg" className="bg-accent">
        <div className="px-8">
          <Navbar />
          <Hero />
        </div>
      </div>
      <main className="px-8">
        <WhyChooseUs space="140px" />
        <HowItWorks space="250px" />
        <Services space="250px" />
        <About space="250px" />
        <OurPromise space="328px" />
        <FAQ space="250px" />
        <AppointmentBooking space="250px" />
        <Testimonials space="250px" />
      </main>
      <Contact space="250px" />
    </div>
  );
}

export default App;
