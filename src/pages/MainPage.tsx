import { styled } from "styled-components";

import video from "@/assets/video/hicardi_video.mp4";
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
      <VideoInner>
        <video
          muted
          autoPlay
          loop
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      </VideoInner>
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

const VideoInner = styled.div`
  width: 100%;
  margin: 0 auto 100px;
  display: flex;
  justify-content: center;
  video {
    width: 800px;
  }
`;

export default MainPage;
