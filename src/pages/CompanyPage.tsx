import About from "@/components/CompanyPage/About";
import Business from "@/components/CompanyPage/Business";
import History from "@/components/CompanyPage/History";
import Intro from "@/components/CompanyPage/Intro";
import RnD from "@/components/CompanyPage/RnD";

const CompanyPage = () => {
  return (
    <>
      <Intro />
      <About />
      <RnD />
      <Business />
      <History />
    </>
  );
};

export default CompanyPage;
