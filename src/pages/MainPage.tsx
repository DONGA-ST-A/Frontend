import ExpectedEffect from "@/components/MainPage/ExpectedEffect";
import Hospital from "@/components/MainPage/Hospital";
import Information from "@/components/MainPage/Information";
import Introduction from "@/components/MainPage/Introduction";
import LearnMore from "@/components/MainPage/LearnMore";
import Statistics from "@/components/MainPage/Statistics";

const MainPage = () => {
  return (
    <>
      <Introduction />
      <Information />
      <Statistics />
      <ExpectedEffect />
      <Hospital />
      <LearnMore />
    </>
  );
};

export default MainPage;
