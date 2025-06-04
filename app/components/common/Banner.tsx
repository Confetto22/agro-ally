import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";

import { Link } from "react-router";

const bannerItems = [
  {
    icon: <BiSolidPhoneCall />,
    title: "Phone No:",
    value: "+123 456 789 963",
    refLink: "#",
  },
  {
    icon: <IoMail />,
    title: "Email Address: ",
    value: "info@agro-ally.com",
    refLink: "#",
  },
  {
    icon: <PiMapPinAreaFill />,
    title: "Location:",
    value: "No: 59 A East Madison Street  Baltimore, MD, USA, 4508 ",
    refLink: "#",
  },
];

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  lg:place-items-center lg:grid-cols-3  p-8 bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748132743/agro-ally/TfVsdEorI3M6CtwPPcnMUstJ5Q_qixlzn.avif')] bg-center bg-cover min-h-[40vh] flex items-center justify-between">
      {bannerItems.map((card) => (
        <div className="card  px-5 py-6 flex items-start justify-start pl-0 gap-2  max-w-[500px]">
          <span className="bg-[var(--main-green)] text-chart-4 text-[1.5rem] md:text-[2.4rem] p-3 rounded-full">
            {card.icon}
          </span>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[1.5rem] font-[700]">{card.title}</h3>
            <Link
              to={card.refLink}
              className="text-[1.2rem] text-[var(--main-green)] font-[500]"
            >
              {card.value}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Banner;
