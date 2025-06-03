import SecHeading from "../common/SecHeading";
import { FaRegEye } from "react-icons/fa";

const allVisions = [
  {
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748959454/agro-ally/medical_sclsol.png",
    title: "Our Vision",
    desc: "To become the global leader in urban agriculture, fostering sustainable and thriving cities where fresh, locally grown produce is accessible to all.",
  },
  {
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748959453/agro-ally/vegetables_uqrhnn.png",
    title: "Our Mission",
    desc: "We are committed to promoting sustainable agriculture practices, minimizing environmental impact, and conserving resources.",
  },
  {
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748959453/agro-ally/mobile_em9mjb.png",
    title: "Our Vision",
    desc: "To become the global leader in urban agriculture, fostering sustainable and thriving cities where fresh, locally grown produce is accessible to all.",
  },
];

type Props = {};

const OurValue = () => {
  return (
    <section className="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748956290/agro-ally/img_14_xtocku.jpg')] bg-center bg-cover">
      <div className="cover bg-[#000000a9] min-h-[90vh] px-8 py-24 flex justify-end ">
        <div className="md:w-[50%] max-w-[600px] flex flex-col gap-7">
          <SecHeading
            subhead={"Our value"}
            mainhead={"Reconnecting Cities with Their Agricultural Roots."}
            subStyle={"border-chart-4 text-chart-4 "}
            mainStyle={
              "md:text-[2.1rem] text-[2.1rem] capitalize font-[800] text-white"
            }
            divStyle="items-start"
          />
          <p className="text-stone-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="allValues  grid grid-cols-1 gap-5">
            {allVisions.map((vision) => (
              <div
                key={vision.title}
                className="value flex flex-col items-start px-5 py-5 w-full bg-white gap-3 shadow-2xl rounded-md md:flex-row"
              >
                <div className="bg-[var(--main-green)] text-white text-[1.6rem] p-3 rounded-b-[4rem] rounded-tl-[4rem] rounded-t-0">
                  <img
                    src={vision.icon}
                    alt="agro ally"
                    className="max-w-[35px]"
                  />
                </div>
                <div>
                  <h3 className="font-[600] text-[1.1rem] uppercase">
                    {vision.title}
                  </h3>
                  <p className="font-[300] text-[.9rem] max-w-[450px]">
                    {vision.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
