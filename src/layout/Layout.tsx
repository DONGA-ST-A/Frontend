import { Outlet } from "react-router-dom";

import Footer from "@/pages/common/Footer";
import Header from "@/pages/common/Header";
import { TopButton } from "@/style/commonStyle";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TopButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </>
  );
};

export default Layout;
