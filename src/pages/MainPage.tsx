import Advantage from "@/components/MainPage/Advantage";
import Carousel from "@/components/MainPage/Carousel";
import ExpectedEffect from "@/components/MainPage/ExpectedEffect";
import Hospital from "@/components/MainPage/Hospital";
import LearnMore from "@/components/MainPage/LearnMore";
import MainCategory from "@/components/MainPage/MainCategory";
import MarketStatus from "@/components/MainPage/MarketStatus";
import SiteReview from "@/components/MainPage/SiteReview";
import Slogan from "@/components/MainPage/Slogan";

const MainPage = () => {
  return (
    <>
      <Carousel />
      <Slogan />
      <MainCategory />
      <MarketStatus />
      <Advantage />
      <ExpectedEffect />
      <SiteReview />
      <Hospital />
      <LearnMore />
    </>
  );
};

export default MainPage;
