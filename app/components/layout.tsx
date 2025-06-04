import { Outlet } from "react-router";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Banner from "./common/Banner";

type Props = {};

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Banner />
      <Footer />
    </>
  );
};

export default Layout;
