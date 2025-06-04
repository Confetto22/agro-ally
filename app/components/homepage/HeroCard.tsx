import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router";

type Props = {};

const HeroCard = (props: Props) => {
  return (
    <section
      className="herocard   text-secondary bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128480/agro-ally/pcb5yTRmmPb3AD4e14mWz1oMukM_gaygbi.avif')]
        bg-center bg-cover
     "
    >
      <div className="cover flex flex-col items-start p-6 bg-gradient-to-r from-[#0d2d0097] to-[#00000091] w-full h-full  justify-center min-h-[90vh] gap-9">
        <p className="border-2 border-chart-4 rounded-[4rem] px-7 py-2 text-chart-4">
          We are Producing Natural Products
        </p>
        <h1 className="text-4xl font-bold text-[3rem] md:text-[3.7rem] lg:text-[4.6rem] md:leading-[4.9rem]">
          Organic Farming <br /> and Agriculture
        </h1>
        <p className="max-w-[500px]">
          Empowering African crop farmers with sustainable water solutions,
          enhancing crop yields, improving livelihoods, and promoting
          environmental stewardship for a food-secure future.
        </p>
        <div className="herobtns  flex flex-row justify-start items-center gap-4">
          <Link
            to={"/about"}
            className="capitalize  bg-[#1f6306] text-stone-100 flex items-center gap-4 py-3 px-6 rounded-4xl border-2 border-[var(--main-green)]"
          >
            discover{" "}
            <span className="bg-chart-4 p-1 rounded-full">
              <HiMiniArrowSmallRight className="text-[1.3rem] text-[#1f6306]" />
            </span>
          </Link>
          {/* <Link
            to={"/services"}
            className="capitalize w-[50%] bg-transparent  flex items-center gap-4 py-3 px-12 rounded-4xl border-2 border-chart-4 text-chart-4"
          >
            service
            <span className="bg-chart-4 p-1 rounded-full">
              <HiMiniArrowSmallRight className="text-[1.3rem] text-[#000]" />
            </span>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
