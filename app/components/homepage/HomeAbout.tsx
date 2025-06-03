import { Fragment } from "react/jsx-runtime";
import SecHeading from "../common/SecHeading";
import Stats from "../Stats";

const aboutValues = [
  {
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748394071/agro-ally/jKxnU7K7YUyQuRBwc8ZdkoW3s_pnkgqx.svg",
    title: "100% Guaranteed Organic Product",
    desc: "This service includes stabling, daily care, feeding, and access to riding arenas and trails.",
  },
  {
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748394071/agro-ally/rdJGZz63dXFUMdxDt6Uq2I2rI_s6yezm.svg",
    title: "Top-Quality Healthy Foods Production",
    desc: "Expertly grown seasonal crops using sustainable farming practices to ensure the highest quality produce.",
  },
];

type Props = {};

const HomeAbout = (props: Props) => {
  return (
    <section className="bg-[var(--dark-green)]">
      <Stats />
      <div className="home-about px-6 py-24  flex md:flex-row-reverse flex-col md:items-start gap-[3rem] md:gap-[5rem]">
        <div className="flex flex-col gap-8 md:w-[50%] md:gap-12">
          <SecHeading
            subhead={"About Us"}
            mainhead={"We're Best Agriculture & Organic Farms"}
            subStyle={"border-chart-4 text-chart-4"}
            mainStyle={"text-white text-[1.8rem]"}
            divStyle="items-start"
          />
          <div className="aboutValues flex flex-col gap-7">
            {aboutValues.map((value) => (
              <div className="single-value flex items-start justify-center gap-5">
                <div className="bg-[var(--main-green)] w-[11%] md:w-[9%] p-3 md:p-4 rounded-full flex items-center justify-center">
                  <img
                    src={value.icon}
                    alt="agro ally"
                    className="w-full max-w-[35px]"
                  />
                </div>
                <div className="w-[89%] flex flex-col items-start gap-2">
                  <h2 className="text-white font-[700] text-[1.4rem]">
                    {value.title}
                  </h2>
                  <p className="text-stone-200">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748394072/agro-ally/yrSXe1E6oJ7AvZHbZeE3i4paGA_zn14n0.avif"
            alt="mystery embassy"
            className="rounded-2xl mt-5"
          />
        </div>
        <div className=" flex flex-col items-start gap-7 md:w-[45%]">
          <div className="imageIllus relative">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748394072/agro-ally/Vxh4GSakf127cXVLEamVAl9JE_umgpuq.avif"
              alt="agro ally"
              className="rounded-2xl md:aspect-[8/10] object-cover"
            />
            <div className="float_text bg-chart-4 absolute w-[75%] md:w-[60%] bottom-[20px] right-[20px] text-black text-[1.2rem] px-8 py-5 md:py-8 rounded-xl font-[700]">
              <p>25 Years Of Experience </p>
              <p>In AgricultureFarming</p>
            </div>
          </div>
          <p className="text-white">
            We believe in responsible farming techniques that prioritize the
            health of our land and customers. Capturing a significant market
            share within the local or regional agricultural market.
          </p>
          <button className="bg-[var(--main-green)] px-6 py-3 rounded-4xl text-white capitalize text-[1.2rem]">
            discover more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
