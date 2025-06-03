import { Outlet } from "react-router";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

type Props = {};

const Layout = (props: Props, p0: unknown) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
