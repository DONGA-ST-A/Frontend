import ExpectedEffect from "@/components/MainPage/ExpectedEffect";
import Hospital from "@/components/MainPage/Hospital";
import Information from "@/components/MainPage/Information";
import Introduction from "@/components/MainPage/Introduction";
import Statistics from "@/components/MainPage/Statistics";

const MainPage = () => {
  return (
    <>
      <Introduction />
      <Information />
      <Statistics />
      <ExpectedEffect />
      <Hospital />
    </>
  );
};

export default MainPage;
