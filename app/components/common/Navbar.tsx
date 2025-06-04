import { Button } from "../ui/button";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router";

const navLinks = [
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "About",
    refLink: "/about-us",
  },
  {
    ref: "Contact",
    refLink: "/contact",
  },
  {
    ref: "Services",
    refLink: "/services",
  },
  {
    ref: "Projects",
    refLink: "/projects",
  },
  // {
  //   ref: "Projects",
  //   refLink: "/",
  // },
];

const Navbar = () => {
  return (
    <nav className="bg-background md:px-9 py-4 px-6 flex items-center justify-between shadow-xl">
      <img
        src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128810/agro-ally/Agro_PNG_dgwskj.png"
        alt="agro ally"
        className="max-w-[80px]"
      />

      <menu className=" items-center gap-4 hidden md:flex">
        {navLinks.map((navLink) => (
          <Link
            to={navLink.refLink}
            className="text-[1.1rem] hover:text-chart-4 ease-in duration-200"
          >
            {navLink.ref}
          </Link>
        ))}
      </menu>

      <div className="md:flex flex-col items-start hidden ">
        <Link to={"#"}>info@agro-ally.com</Link>
        <Link to={"#"}>+233(0) 206-140-215</Link>
      </div>

      <Sheet>
        <SheetTrigger
          asChild
          className="cursor-pointer  bg-primary text-secondary hover:bg-secondary hover:text-primary 
              hover:border-primary border
              transition-colors duration-300 p-2 rounded-sm shadow-xl md:hidden"
        >
          <IoMenu className="text-[2.9rem]" />
        </SheetTrigger>

        <SheetContent className="p-4">
          <SheetHeader className="flex ">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128810/agro-ally/Agro_PNG_dgwskj.png"
              alt="agro ally"
              className="max-w-[120px]"
            />
          </SheetHeader>
          <hr />
          <ul className=" w-full flex flex-col items-start h-[50%] gap-5  py-5">
            {navLinks.map((link) => (
              <SheetClose asChild>
                <Link
                  to={link.refLink}
                  className="hover:text-[var(--main-green)] ease-in duration-200"
                >
                  {link.ref}
                </Link>
              </SheetClose>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
