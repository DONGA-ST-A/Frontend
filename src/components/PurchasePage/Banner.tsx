import styled from "styled-components";

import PurchaseBanner from "@/assets/banner/purchase_banner.svg";

const Banner = () => {
  return (
    <Container>
      <img
        alt="배너"
        src={PurchaseBanner}
      />
      <div className="text-container">
        <h1 className="title">스마트한 병원을 위한 솔루션</h1>
        <div className="description">HiCardi+ 제품을 만나보세요</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  .text-container {
    width: 1230px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .title {
      font-family: NotoSansBold;
      font-size: var(--text_headline1);
      color: var(--color_main_skyblue);
    }

    .description {
      font-family: NotoSansMedium;
      font-size: var(--text_body1);
      color: var(--color_sub3);
    }
  }
`;

export default Banner;
