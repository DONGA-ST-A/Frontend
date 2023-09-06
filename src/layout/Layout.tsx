import { Outlet } from "react-router-dom";

import Footer from "@/pages/common/Footer";
import Header from "@/pages/common/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
