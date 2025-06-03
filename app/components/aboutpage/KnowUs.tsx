import { Link } from "react-router";
import SecHeading from "../common/SecHeading";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const knowUsText = [
  "Suspe ndisse suscipit sagittis leo",
  "Entum estibulum disgnissim posuere",
  "Lorem Ipsum on the tend to repeat",
];

type Props = {};

const KnowUs = (props: Props) => {
  return (
    <section className="know-us px-8 py-24 md:pb-36 flex flex-col md:flex-row md:items-center md:justify-center md:gap-[5rem] gap-12 bg-[var(--main-green)]">
      <div className="imagses_box relative  min-h-[75vh]  rounded-xl md:w-[35%]">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748947834/agro-ally/qQ7rFB5eVVBjturZ7t2PLrcFLI_h8xy5q.avif"
          alt="agro ally"
          className="w-full h-full min-h-[75vh]  object-cover object-center rounded-xl shadow-2xl"
        />
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748947834/agro-ally/qQ7rFB5eVVBjturZ7t2PLrcFLI_h8xy5q.avif"
          alt="agro ally"
          className="hidden md:block rounded-xl absolute bottom-[-70px] left-[-100px] w-[80%] h-[60%] object-cover object-center shadow-2xl"
        />
      </div>
      <div className="knowus_text flex flex-col items-start gap-6 md:w-[40%]">
        <SecHeading
          subhead={"Get to Know Us"}
          mainhead={"The Best Agriculture Market"}
          subStyle={"border-chart-4 text-chart-4 "}
          mainStyle={
            "md:text-[2.8rem] text-[2.1rem] text-white capitalize font-[800]"
          }
          divStyle="items-start"
        />
        <p className="text-chart-4 text-[1.2rem] font-[600]">
          There are many variations of passa of lorem available, but the
          majority have suffered alteration.
        </p>
        <p className=" font-[400] text-white text-[1rem]">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don't look even.
        </p>
        <div className="allTexts flex flex-col gap-2">
          {knowUsText.map((text) => (
            <h3 key={text} className="text-[#fff] flex items-center gap-2">
              <MdOutlineCheckCircleOutline className="text-chart-4 text-[1.7rem]" />
              {text}
            </h3>
          ))}
        </div>
        <Link
          to={"#"}
          className="bg-[#fff] px-7 py-3 uppercase font-[700] text-[var(--main-green)]"
        >
          Reach Us!
        </Link>
      </div>
    </section>
  );
};

export default KnowUs;
