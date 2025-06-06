import styles from "./styles.module.scss";

type SlideProps = {
  name: string;
  quote: string;
  date: string;
  dotcolor: string;
  bgcolor: string;
  color: string;
  border: string;
  bordercolor: string;
};

const Slide = ({
  name,
  quote,
  date,
  dotcolor,
  bgcolor,
  color,
  border,
  bordercolor,
}: SlideProps) => {
  return (
    <div
      className={`order-1 md:order-1 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 relative w-[350px] md:w-[516px] h-[450px] md:h-[400px] rounded-xl ${bgcolor} border-${border}  border-[${bordercolor}]`}
    >
      <div className="flex flex-col md:flex-row w-full h-[maxcontent] pl-2 md:pl-10 pt-10 md:text-left">
        <div className="mt-2 md:mt-0">
          <div className={`rounded-full w-full h-[maxcontent] ${dotcolor}`} />
        </div>
        <div className="w-4/5 flex flex-col justify-start">
          <h5 className={`${styles.pricecopy} px-1 mt-[-3px] md:px-5 ${color}`}>
            {name}
          </h5>
          <div
            className={`${styles.titlecopy} w-full px-1 pt-10 md:px-4 lg:px-5 ${color}`}
          >
            {quote}
          </div>
          <p
            className={`${styles.timecopy} h-full flex flex-col justify-end mb-[2rem] px-1 md:px-5 ${color}`}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
