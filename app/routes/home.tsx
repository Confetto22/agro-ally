// import type { Route } from "./+types/home";

// import Banner from "~/components/common/Banner";
import SecHeading from "~/components/common/SecHeading";
import HeroCard from "~/components/homepage/HeroCard";
import HomeAbout from "~/components/homepage/HomeAbout";
import Welcome from "~/components/homepage/Welcome";
import Services from "~/components/Services";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { RiLeafLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

const chooseValues = [
  {
    name: "Solution variety",
    icon: <FaRegLightbulb />,
    desc: "We provide a vast array of services across agricultural, commercial, and domestic sectors.",
  },
  {
    name: "Expertise",
    icon: <FaRegStar />,
    desc: "Our understanding and experience in water systems ensure efficient, reliable solutions.",
  },
  {
    name: "Sustainability",
    icon: <RiLeafLine />,
    desc: "Our operations centre around environmental positivity and efficient water use.",
  },
  {
    name: "Customer-First",
    icon: <IoPersonOutline />,
    desc: "We prioritise personalised service, clear communication, and your satisfaction.",
  },
];

export default function Home() {
  return (
    <main>
      <HeroCard />
      {/* <Banner /> */}

      <Welcome />
      <Services />
      <HomeAbout />
      <section className="choose-us flex flex-col md:flex-row md:gap-[3rem]">
        <div className="md:w-[50%] ">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748399333/agro-ally/AMS-Day-1-21-1500x1367_gb0jvz.webp"
            alt="agro ally"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="chooseUs-text px-6 py-16 flex flex-col items-start gap-10 md:max-w-[480px] md:w-[50%]">
          <SecHeading
            subhead={"Why choose us"}
            mainhead={"We have the experience to get the job done"}
            subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
            mainStyle={"md:text-[2rem] capitalize font-[800]"}
          />
          <div className="allChooseUs grid grid-cols-1 gap-8">
            {chooseValues.map((singleValue) => (
              <div
                key={singleValue.name}
                className="singleChoose max-w-[550px] flex flex-col items-start gap-3"
              >
                <h2 className="flex text-[1.4rem] items-center gap-2 font-[600]">
                  <span className="text-[2rem] text-[var(--main-green)]">
                    {singleValue.icon}
                  </span>{" "}
                  {singleValue.name}
                </h2>
                <p className="text-[1rem]">{singleValue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
