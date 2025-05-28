import { Outlet } from "react-router";
import Navbar from "./common/Navbar";

type Props = {};

const Layout = (props: Props, p0: unknown) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
