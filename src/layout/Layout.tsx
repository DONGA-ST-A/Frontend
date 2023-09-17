import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import Footer from "@/pages/common/Footer";
import Header from "@/pages/common/Header";
import { TopButton } from "@/style/commonStyle";

const Layout = () => {
  const [scrollLocation, setScrollLocation] = useState<number>(0);
  const onScroll = () => {
    setScrollLocation(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollLocation]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TopButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{
          transform: scrollLocation > 200 ? "translateX(0)" : "",
        }}
      />
    </>
  );
};

export default Layout;
