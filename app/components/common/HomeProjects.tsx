// type  = {}

// import { Link } from "react-router";
import { Link } from "react-router";
import SecHeading from "./SecHeading";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useState } from "react";
import { allProjects } from "./projects";

const HomeProjects = () => {
  const [hovered, setHovered] = useState("");

  return (
    <section className="px-9  py-16  flex flex-col gap-9">
      <div className=" flex flex-col md:flex-row md:items-center md:justify-between items-start gap-4 md:max-w-[80vw] mx-auto w-full">
        <SecHeading
          subhead={"Our Projects"}
          mainhead={"Projects that we are really proud of:"}
          subStyle={"border-[var(--main-green)] text-[var(--main-green)]"}
          mainStyle={" text-[1.8rem] md:text-[2.3rem] text-black capitalize"}
          divStyle="md:w-[60%] items-start"
        />
        <Link
          to={"/projects"}
          className="bg-[var(--main-green)] text-white px-5 py-3 font-[500] hover:text-[var(--main-green)] hover:bg-transparent ease-in-out duration-300 border border-[var(--main-green)]"
        >
          All Projects
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

          {/* <Link to={"/projects"} className="cursor-pointer">
            <button className="bg-white text-black px-5 py-3 font-[500] hover:text-white hover:bg-transparent ease-in-out duration-300 border border-white cursor-pointer">
              Find Out More
            </button>
          </Link> */}
        </div>
      </div>
      <div className="allCases grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allProjects.slice(0, 3).map((caseItem) => (
          <Link
            to={`/projects/${caseItem.name.replaceAll(" ", "-").toLowerCase()}`}
            key={caseItem.name}
          >
            <div
              onMouseOver={() => setHovered(caseItem.name)}
              onMouseOut={() => setHovered("")}
              className=" max-w-[600px] relative cursor-pointer aspect-[6/5] md:aspect-[8/8] rounded-xl"
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
