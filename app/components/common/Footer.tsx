import { LiaTelegram } from "react-icons/lia";
import { Link } from "react-router";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

// type footerSocials = {};

const contactLinks = [
  {
    // name: "phone",
    icon: <LuPhone />,
    ref: "+233(0) 206-140-215",
    refLink: "#",
  },
  {
    // name: "location",
    icon: <IoLocationOutline />,
    ref: "Tatop, Weija",
    refLink: "#",
  },
  {
    // name: "email",
    icon: <GoMail />,
    ref: "info@agro-ally",
    refLink: "#",
  },
];

const footerSocials = [
  {
    icon: <FaInstagram />,
    ref: "#",
    refName: "instagram",
  },
  {
    icon: <FaTiktok />,
    ref: "#",
    refName: "tiktok",
  },
  {
    icon: <FaFacebookF />,
    ref: "#",
    refName: "facebook",
  },
  {
    icon: <FaWhatsapp />,
    ref: "#",
    refName: "whatsapp",
  },
  //   {
  //     icon: <FaTwitter />,
  //     ref: "#",
  //     refName: "twitter",
  //   },
];

const resourceLinks = [
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "About",
    refLink: "/",
  },
  {
    ref: "Services",
    refLink: "/",
  },
  {
    ref: "Case Studies",
    refLink: "/",
  },
  {
    ref: "Projects",
    refLink: "/",
  },
];

const year = new Date().getFullYear();

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[var(--dark-green)] min-h-[60vh] px-8 md:px-14 py-16 flex flex-col items-center justify-center">
      {/* <div className="newsletter  text-stone-200 flex flex-col gap-4 max-w-[1000px] md:w-[80%] mx-auto items-center text-center">
        <p>Stay Connected</p>
        <p>Get updates on events and inspiration.</p>
        <form
          className="letter-form  flex items-center justify-center gap-0 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            required
            className="border-none w-[70%] bg-white  min-h-[2.3rem]  rounded-l-[2rem] outline-none text-[#242424] pl-[2rem] text-[.7rem] md:text-[.9rem]"
            placeholder="e-mail / phone no."
          />
          <button
            type="submit"
            className="w-[30%] bg-[var(--second-color)] border-none hover:cursor-pointer  text-[.8rem] uppercase min-h-[2.3rem] tracking-wider rounded-r-[2rem] hover:bg-[#954026] ease-in-out duration-300"
          >
            submit
          </button>
        </form>
      </div> */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-[2rem] gap-y-[4rem] md:gap-y-0">
        <div className="div-1 flex flex-col items-start gap-3 ">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128810/agro-ally/Agro_b0d051.jpg"
            alt="mystery embassy international"
            className="max-w-[100px]"
          />
          <p className=" font-[200] text-stone-300 ">
            We work with a passion taking challenges and creating new ones in
            advertising sector.
          </p>
          <div className="footerSocials flex items-center gap-2 mt-2">
            {footerSocials.map((social) => (
              <Link
                to={social.ref}
                target="_blank"
                key={social.refName}
                className="bg-white  rounded-full text-chart-4 hover:text-[var(--main-green)] flex items-center justify-center hover:bg-chart-4 text-[1rem] ease-in-out duration-500 w-[40px] h-[40px]"
                aria-label={`${social.refName} link`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="div-2 flex flex-col items-start  gap-3  max-w-[70%]">
          <p className="text-white text-[1.4rem] uppercase font-[700]">
            useful links
          </p>
          <menu className="useful-links flex flex-col items-start  justify-start w-full gap-3">
            {resourceLinks.map((link) => (
              <Link
                to={link.refLink}
                className="text-stone-300 font-[200]"
                key={link.ref}
              >
                {link.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col items-start gap-3  w-full">
          <p className="text-white text-[1.4rem] uppercase font-[700]">
            contacts
          </p>
          <p className="text-stone-300 font-[200] capitalize">
            for more info & enquiries, reach us via:
          </p>
          <menu className="contacts flex flex-col items-start gap-2">
            {contactLinks.map((contact) => (
              <Link
                key={contact.ref}
                to={contact.refLink}
                className="text-stone-300 font-[200] flex items-center gap-3"
              >
                {contact.icon} {contact.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col items-start gap-3">
          <p className="text-white text-[1.4rem] uppercase font-[700]">
            Subcribe Us
          </p>
          <p className="text-stone-300  font-[200]">
            Signup for our latest news & articles. <br /> We won't give you spam
            mails.
          </p>
          <form
            className="letter-form  flex items-center justify-center gap-0 w-full min-h-[3rem] relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              required
              className="border-none w-full rounded-[.3rem] bg-white  h-full   outline-none text-[#242424] pl-[2rem] text-[.9rem]"
              placeholder="e-mail / phone no."
            />
            <button
              type="submit"
              className="w-[20%] right-0 flex items-center justify-center rounded-[.3rem] bg-chart-4 border-none hover:cursor-pointer hover:bg-[var(--main-green)] hover:text-[#fff] text-[1.2rem] uppercase h-full tracking-wider absolute ease-in-out duration-300 max-w-[90px]"
            >
              <GoMail />
            </button>
          </form>
        </div>
      </section>
      <hr className="w-full bg-[#bfbebe40] h-[.2px] border-none rounded-2xl mt-12 mb-6" />
      <div className="text-stone-400 flex flex-col items-center justify-center text-center capitalize font-[300]">
        <p>&copy; {year} All Right Reserved. Agro Ally </p>
        <p>
          developed by{" "}
          <Link
            to={"#"}
            className="text-chart-4 font-[500] hover:text-[var(--main-green)] hover:bg-chart-4 px-1 ease-in-out duration-200"
          >
            Confetto &trade;
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
