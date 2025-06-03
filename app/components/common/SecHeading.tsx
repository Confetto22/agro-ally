type headingTypes = {
  subhead: string;
  mainhead: string;
  subStyle: string;
  mainStyle: string;
  divStyle?: string;
};

const SecHeading = ({
  subhead,
  mainhead,
  subStyle,
  mainStyle,
  divStyle,
}: headingTypes) => {
  return (
    <div className={` secheading flex flex-col  gap-2 ${divStyle}`}>
      <p
        className={`${subStyle} border-2  px-6 text-[1.1rem] py-2 rounded-4xl  capitalize font-[500]`}
      >
        {subhead}
      </p>
      <h2 className={`${mainStyle} text-[1.6rem] font-[600]`}>{mainhead}</h2>
    </div>
  );
};

export default SecHeading;
