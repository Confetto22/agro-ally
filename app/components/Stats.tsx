// type Props = {}
// import CountUp from "react-countup";
// import CountUp from "react-countup";
// import CountUpPkg from "react-countup";
import CountUp from "react-countup";

const statsFigures = [
  {
    name: "Agriculture Products",
    value: 6420,
  },
  {
    name: "Projects Completed",
    value: 8800,
  },
  {
    name: "Satisfied Clients",
    value: 9280,
  },
  {
    name: "Experts Farmers",
    value: 1800,
  },
];

const Stats = () => {
  return (
    <section className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[var(--main-green)] text-white w-[90%] max-w-[500px] md:max-w-[90%] mx-auto py-8  px-14 gap-y-5 rounded-xl relative bottom-[100px] min-h-[30vh] shadow-2xl">
      {statsFigures.map((stat) => (
        <div
          className="stats_div text-center py-6 flex flex-col items-center justify-center gap-2  border-r-0 md:border-r border-r-chart-4 border-b border-b-chart-4 md:border-b-0"
          key={stat.name}
        >
          <p className="figure font-[800] text-[2.7rem]">
            {/* <CountUp
              end={stat.value}
              start={0}
              duration={4}
              enableScrollSpy
              scrollSpyDelay={200}
              scrollSpyOnce
             
            /> */}
            {stat.value}
          </p>
          <p className="text-[.9rem] font-[300]">{stat.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
