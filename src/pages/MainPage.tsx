import Hospital from "@/components/MainPage/Hospital";
import Information from "@/components/MainPage/Information";
import Introduction from "@/components/MainPage/Introduction";
import SiteReview from "@/components/MainPage/SiteReview";
import Statistics from "@/components/MainPage/Statistics";

const MainPage = () => {
  return (
    <>
      <Introduction />
      <Information />
      <Statistics />
      <SiteReview />
      <Hospital />
    </>
  );
};

export default MainPage;
