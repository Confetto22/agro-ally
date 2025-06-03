// type  = {}

// import { Link } from "react-router";
import { Link } from "react-router";
import SecHeading from "./SecHeading";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useState } from "react";

const allCases = [
  {
    bgPic:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748481085/agro-ally/L5ZOf1bSsxnFo4iTDv3bamiEk_rszd8g.avif",
    name: "Boningale Irrigation System",
    description: [
      {
        intro:
          "In the heart of the vibrant greenhouse, an exciting and transformative new chapter was on the horizon. Our dedicated team, driven by passion and expertise, took the initiative to kickstart this transformation. First on our agenda, we rolled out an innovative misting system, a game-changer in the world of plant cultivation. Designed with meticulous attention to detail, this system wasn't just any ordinary addition. Instead, it was tailored for unparalleled precision, ensuring just the right amount of mist to maintain optimal humidity. Furthermore, this optimal environment paved the way for plants to not only grow but truly thrive. Additionally, our commitment to leveraging the latest technology means that plants benefit from a consistently ideal atmosphere, setting a new standard for greenhouses everywhere.",
        introPic:
          "Moving on, we crafted a state-of-the-art pump room. Within its walls, a unique copper dosing feature took centre stage, ensuring water purity. But that wasn't all. One of the standout additions was the automated acid dosing system, ensuring perfect pH levels for each droplet. With meticulous attention to detail, the system promised optimum growth conditions for plants.",
        whatWeDid:
          "Then, came the Dosatron. A real game-changer, this device seamlessly injected fertilisers into the watering system. So, with every mist or spray, plants received a nutritious boost. In essence, this greenhouse is no longer just a shelter for plants. It's a harmonised ecosystem where water quality, nutrient levels, and environmental conditions are perfectly balanced, all thanks to modern British ingenuity. The result? A greenhouse where growth knows no bounds.",
        weDidPic:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
        finalTouches:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
        finalPic:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
      },
    ],
  },
  {
    bgPic:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748481086/agro-ally/TgRCmSQEBuWCS5PT6mj8xdMcHI_qk6sxr.avif",
    name: "Boningale  System",
    description: [
      {
        intro:
          "In the heart of the vibrant greenhouse, an exciting and transformative new chapter was on the horizon. Our dedicated team, driven by passion and expertise, took the initiative to kickstart this transformation. First on our agenda, we rolled out an innovative misting system, a game-changer in the world of plant cultivation. Designed with meticulous attention to detail, this system wasn't just any ordinary addition. Instead, it was tailored for unparalleled precision, ensuring just the right amount of mist to maintain optimal humidity. Furthermore, this optimal environment paved the way for plants to not only grow but truly thrive. Additionally, our commitment to leveraging the latest technology means that plants benefit from a consistently ideal atmosphere, setting a new standard for greenhouses everywhere.",
        introPic:
          "Moving on, we crafted a state-of-the-art pump room. Within its walls, a unique copper dosing feature took centre stage, ensuring water purity. But that wasn't all. One of the standout additions was the automated acid dosing system, ensuring perfect pH levels for each droplet. With meticulous attention to detail, the system promised optimum growth conditions for plants.",
        whatWeDid:
          "Then, came the Dosatron. A real game-changer, this device seamlessly injected fertilisers into the watering system. So, with every mist or spray, plants received a nutritious boost. In essence, this greenhouse is no longer just a shelter for plants. It's a harmonised ecosystem where water quality, nutrient levels, and environmental conditions are perfectly balanced, all thanks to modern British ingenuity. The result? A greenhouse where growth knows no bounds.",
        weDidPic:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
        finalTouches:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
        finalPic:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
      },
    ],
  },
  {
    bgPic:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748481086/agro-ally/hIiFD3wHpCagiQZtgWVWY7EVU_zkf0cv.avif",
    name: "Boningale D System",
    description: [
      {
        intro:
          "In the heart of the vibrant greenhouse, an exciting and transformative new chapter was on the horizon. Our dedicated team, driven by passion and expertise, took the initiative to kickstart this transformation. First on our agenda, we rolled out an innovative misting system, a game-changer in the world of plant cultivation. Designed with meticulous attention to detail, this system wasn't just any ordinary addition. Instead, it was tailored for unparalleled precision, ensuring just the right amount of mist to maintain optimal humidity. Furthermore, this optimal environment paved the way for plants to not only grow but truly thrive. Additionally, our commitment to leveraging the latest technology means that plants benefit from a consistently ideal atmosphere, setting a new standard for greenhouses everywhere.",
        introPic:
          "Moving on, we crafted a state-of-the-art pump room. Within its walls, a unique copper dosing feature took centre stage, ensuring water purity. But that wasn't all. One of the standout additions was the automated acid dosing system, ensuring perfect pH levels for each droplet. With meticulous attention to detail, the system promised optimum growth conditions for plants.",
        whatWeDid:
          "Then, came the Dosatron. A real game-changer, this device seamlessly injected fertilisers into the watering system. So, with every mist or spray, plants received a nutritious boost. In essence, this greenhouse is no longer just a shelter for plants. It's a harmonised ecosystem where water quality, nutrient levels, and environmental conditions are perfectly balanced, all thanks to modern British ingenuity. The result? A greenhouse where growth knows no bounds.",
        weDidPic:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
        finalTouches:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
        finalPic:
          "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
      },
    ],
  },
  //   {
  //     bgPic:
  //       "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748481085/agro-ally/axJGVH4VS1vHwtToP5Ej5tFge68_qgqxs3.avif",
  //     name: "Boningale D System",
  //     description: [
  //       {
  //         intro:
  //           "In the heart of the vibrant greenhouse, an exciting and transformative new chapter was on the horizon. Our dedicated team, driven by passion and expertise, took the initiative to kickstart this transformation. First on our agenda, we rolled out an innovative misting system, a game-changer in the world of plant cultivation. Designed with meticulous attention to detail, this system wasn't just any ordinary addition. Instead, it was tailored for unparalleled precision, ensuring just the right amount of mist to maintain optimal humidity. Furthermore, this optimal environment paved the way for plants to not only grow but truly thrive. Additionally, our commitment to leveraging the latest technology means that plants benefit from a consistently ideal atmosphere, setting a new standard for greenhouses everywhere.",
  //         introPic:
  //           "Moving on, we crafted a state-of-the-art pump room. Within its walls, a unique copper dosing feature took centre stage, ensuring water purity. But that wasn't all. One of the standout additions was the automated acid dosing system, ensuring perfect pH levels for each droplet. With meticulous attention to detail, the system promised optimum growth conditions for plants.",
  //         whatWeDid:
  //           "Then, came the Dosatron. A real game-changer, this device seamlessly injected fertilisers into the watering system. So, with every mist or spray, plants received a nutritious boost. In essence, this greenhouse is no longer just a shelter for plants. It's a harmonised ecosystem where water quality, nutrient levels, and environmental conditions are perfectly balanced, all thanks to modern British ingenuity. The result? A greenhouse where growth knows no bounds.",
  //         weDidPic:
  //           "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
  //         finalTouches:
  //           "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
  //         finalPic:
  //           "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp",
  //       },
  //     ],
  //   },
];

const CaseStudies = () => {
  const [hovered, setHovered] = useState("");

  return (
    <section className="px-9  py-16  flex flex-col gap-9">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between items-start gap-4 md:max-w-[80vw] mx-auto">
        <SecHeading
          subhead={"Case Studies"}
          mainhead={"Water management projects that we are really proud of:"}
          subStyle={"border-[var(--main-green)] text-[var(--main-green)]"}
          mainStyle={" text-[1.8rem] md:text-[2.3rem] text-black"}
          divStyle="md:w-[60%] items-start"
        />
        <Link
          to={"#"}
          className="bg-[var(--main-green)] text-white px-5 py-3 font-[500] hover:text-[var(--main-green)] hover:bg-transparent ease-in-out duration-300 border border-[var(--main-green)]"
        >
          View All Case Studies
        </Link>
      </div>
      <div className="md:max-w-[85vw] mx-auto md:relative">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748399333/agro-ally/AMS-Day-1-21-1500x1367_gb0jvz.webp"
          alt="agro ally"
          className="w-full aspect-video object-cover md:min-h-"
        />

        <div className="text  py-8 px-7 flex flex-col items-start gap-5 md:absolute md:w-[50%] bottom-[4%] right-[4%] bg-[var(--main-green)] text-white">
          <h2 className="font-[800] text-[1.8rem]">
            Vertical Farm West Midlands
          </h2>
          <p className="">
            In this ground-breaking project, a state-of-the-art vertical farm in
            the West Midlands, UK, underwent a transformation with the
            integration of advanced water management systems. By employing
            innovative filtration and reverse osmosis technologies, water
            efficiency was optimised, ushering in a new phase of sustainable
            farming practices within this specific farming operation.
          </p>

          <Link to={"#"} className="cursor-pointer">
            <button className="bg-white text-black px-5 py-3 font-[500] hover:text-white hover:bg-transparent ease-in-out duration-300 border border-white cursor-pointer">
              Find Out More
            </button>
          </Link>
        </div>
      </div>
      <div className="allCases grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allCases.map((caseItem) => (
          <div
            key={caseItem.name}
            onMouseOver={() => setHovered(caseItem.name)}
            onMouseOut={() => setHovered("")}
            className=" max-w-[600px] relative cursor-pointer aspect-[6/4] md:aspect-[8/8] rounded-xl"
          >
            <img
              src={caseItem.bgPic}
              alt="agro ally"
              className="w-full h-full object-cover rounded-xl"
            />
            <div
              className={`cover w-full h-full absolute top-0  text-white p-8 flex flex-col items-start rounded-xl justify-end ease-in duration-500 bg-gradient-to-t from-[#0e2207] to-[#00000034]  ${
                hovered === caseItem.name ? "" : ""
              }`}
            >
              <p
                className={`${
                  hovered === caseItem.name
                    ? "left-[80%] text-chart-4"
                    : "left-[1rem] text-white"
                } absolute top-[2rem]  text-[3rem] card-arrow`}
              >
                <LiaLongArrowAltRightSolid />
              </p>
              <h2
                className={`text-[1.4rem] ease-in duration-300 uppercase font-[700] ${
                  hovered === caseItem.name ? "text-chart-4" : "text-white"
                }`}
              >
                {caseItem.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
