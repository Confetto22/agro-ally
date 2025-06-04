import PageHead from "~/components/common/PageHead";
import { Link } from "react-router";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useState } from "react";
import { allCases } from "~/components/common/projects";

type Props = {};

const Cases = (props: Props) => {
  const [hovered, setHovered] = useState("");
  return (
    <section>
      <PageHead
        pageBg="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748947834/agro-ally/qQ7rFB5eVVBjturZ7t2PLrcFLI_h8xy5q.avif')]"
        pageName="Case Study"
        pageDesc="Best Awards Winning Organic Farming"
      />
      <div className="allCases grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-8 py-24">
        {allCases.map((caseItem) => (
          <div
            key={caseItem.name}
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
        ))}
      </div>
    </section>
  );
};

export default Cases;
