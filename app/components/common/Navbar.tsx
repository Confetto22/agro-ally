import { Button } from "../ui/button";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-background py-4 px-6 flex items-center justify-between shadow-xl">
      <img
        src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128810/agro-ally/Agro_PNG_dgwskj.png"
        alt="agro ally"
        className="max-w-[70px]"
      />
      <Button
        className="cursor-pointer  bg-primary text-secondary hover:bg-secondary hover:text-primary 
      hover:border-primary border
      transition-colors duration-300"
      >
        <IoMenu className="" />
      </Button>
    </nav>
  );
};

export default Navbar;
