import Advantage from "@/components/MainPage/Advantage";
import ExpectedEffect from "@/components/MainPage/ExpectedEffect";
import Hospital from "@/components/MainPage/Hospital";
import LearnMore from "@/components/MainPage/LearnMore";
import MarketStatus from "@/components/MainPage/MarketStatus";

const MainPage = () => {
  return (
    <>
      <MarketStatus />
      <Advantage />
      <ExpectedEffect />
      <Hospital />
      <LearnMore />
    </>
  );
};

export default MainPage;
