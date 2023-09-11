import Advantage from "@/components/MainPage/Advantage";
import Carousel from "@/components/MainPage/Carousel";
import ExpectedEffect from "@/components/MainPage/ExpectedEffect";
import Hospital from "@/components/MainPage/Hospital";
import LearnMore from "@/components/MainPage/LearnMore";
import SiteReview from "@/components/MainPage/SiteReview";

const MainPage = () => {
  return (
    <>
      <Carousel />
      <Advantage />
      <ExpectedEffect />
      <SiteReview />
      <Hospital />
      <LearnMore />
    </>
  );
};

export default MainPage;
