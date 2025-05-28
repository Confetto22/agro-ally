import { Link } from "react-router";

type Props = {};

const Welcome = () => {
  return (
    <section className=" md:pt-0 flex flex-col-reverse md:flex-row md:gap-[4rem] md:items-center md:pr-8">
      <div className="w-full md:w-[50%]">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748396855/agro-ally/AMS-Day-2-90-1500x1500_m1paiu.webp"
          alt="agro ally"
          className="w-full "
        />
      </div>
      <div className="px-6 py-12 flex flex-col items-start gap-7 font-[300] md:w-[50%] max-w-[500px] md:text-[1.1rem]">
        <h2 className="text-black text-[1.8rem] md:text-[2.5rem] font-[700] leading-[2rem] md:leading-[2.8rem] md:max-w-[500px]">
          Welcome to the world of Agro Ally Solutions
        </h2>
        <p>
          Agri Management Solutions, located in the hub of the water management
          industry, stands for innovation and efficiency. Our mission is to
          revolutionise water management and usage across sectors using our vast
          experience and cutting-edge technology.
        </p>
        <p>
          We cater to diverse watering needs, from home gardens to vast fields
          and industries. Our sustainability-centred ethos drives us to create
          bespoke solutions for minimising water waste, committing ourselves to
          a greener future.
        </p>
        <Link
          to={"#"}
          className="bg-[var(--main-green)] text-white px-5 py-4 font-[500] hover:text-black hover:bg-chart-4 ease-in duration-300"
        >
          More About Us
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
