// import gsap from "gsap";
// import Slider from "../../components/slider/slider.tsx";
import Slider from "../../components/slider/slider.tsx";
import Slide from "../../components/slider/slides/Slide.tsx";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

interface componentProps {
  space: string;
}

export default function Testimonials(props: componentProps) {
  const isMobile = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width : 600px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 601px) and (max-width : 1023px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <section
      id="testimonials"
      style={{ marginTop: props.space }}
      className={`px-0 py-0 max-w-[1600px] mx-auto`}
    >
      <div className="flex flex-col">
        <div id="thetitleDesktop" className="flex flex-col ">
          <div className="mx-auto text-center">
            <div
              id="thetitleDesktop"
              className={isDesktop ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)]`}
              >
                TESTIMONIALS
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-18`}
              >
                Our Clients Are Barking About Us
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-info w-2/3 mx-auto mt-2" />
              </div>
            </div>

            <div
              id="thetitleMobile"
              className={isTablet || isMobile ? `w-full` : `${styles.hide}`}
            >
              <h3
                className={`${styles.pretitletxt} text-[clamp(1rem,1.5vw,1.5rem)] mb-1`}
              >
                TESTIMONIALS
              </h3>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                Our Clients
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)] leading-6`}
              >
                Are Barking
              </h4>
              <h4
                className={`${styles.titletxt} text-[clamp(2.75rem,3.75vw,3.75rem)]`}
              >
                About Us
              </h4>
              <div>
                <hr className="border-t-6 rounded-2xl border-info w-2/3 mx-auto mt-1" />
              </div>
            </div>
          </div>

          <div className="mt-[75px]">
            <div className="grid grid-cols-1fr grid-cols-12 gap-4">
              {/* <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}> */}
              <div className="w-full col-span-12">
                <Slider visibleCount={2}>
                  <Slide
                    name="Marshall C."
                    quote='"My dog came out looking like a celebrity. Even the squirrels were staring!"'
                    date="one week ago"
                    dotcolor="bg-accent"
                    bgcolor="bg-neutral"
                    color="txtlight"
                    border="2"
                    bordercolor="colordark"
                  />
                  <Slide
                    name="Joan P."
                    quote='"I booked a groom my dog got a spa day. I&#39;m jealous."'
                    date="two weeks ago"
                    dotcolor="bg-primary"
                    bgcolor="bg-accent"
                    color="txtdark"
                    border="2"
                    bordercolor="colordark"
                  />
                  <Slide
                    name="Linda W."
                    quote='"I thought my dog was cute before…now she&#39;s calendar-ready!"'
                    date="two weeks ago"
                    dotcolor="bg-primary"
                    bgcolor="bg-info"
                    color="txtdark"
                    border="2"
                    bordercolor="colordark"
                  />
                  <Slide
                    name="Sarah T. & Max the Golden"
                    quote='"Max came out looking like a show dog and he knows it. He struts past the mirror now!"'
                    date="over two weeks ago"
                    dotcolor="bg-accent"
                    bgcolor="bg-neutral"
                    color="txtlight"
                    border="2"
                    bordercolor="colordark"
                  />
                  <Slide
                    name="Emily R."
                    quote='"Rufus got a full makeover, he&#39;s getting more compliments than I am!"'
                    date="over two weeks ago"
                    dotcolor="bg-primary"
                    bgcolor="bg-accent"
                    color="txtdark"
                    border="2"
                    bordercolor="colordark"
                  />
                  <Slide
                    name="Carlos D. & Mochi"
                    quote='"The bandana Mochi got after his cut? Iconic. He&#39;s basically a fashion influencer now."'
                    date="three weeks ago"
                    dotcolor="bg-accent"
                    bgcolor="bg-info"
                    color="txtdark"
                    border="2"
                    bordercolor="colordark"
                  />
                  <Slide
                    name="Amanda B. & Princess Fluffington"
                    quote='"The fluff is real. I can’t stop hugging her and she actually smells nice now!"'
                    date="over three weeks ago"
                    dotcolor="bg-accent"
                    bgcolor="bg-neutral"
                    color="txtlight"
                    border="2"
                    bordercolor="colordark"
                  />
                  <Slide
                    name=""
                    quote=""
                    date=""
                    dotcolor=""
                    bgcolor=""
                    color=""
                    border="0"
                    bordercolor="null"
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
