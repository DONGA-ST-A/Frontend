import styled from "styled-components";

import img1 from "@/assets/UsingProduct/howtouse1.svg";
import img2 from "@/assets/UsingProduct/howtouse2.svg";
import img3 from "@/assets/UsingProduct/howtouse3.svg";
import img4 from "@/assets/UsingProduct/howtouse4.svg";
import gif1 from "@/assets/UsingProduct/howtouse_1.gif";
import gif2 from "@/assets/UsingProduct/howtouse_2.gif";
import gif3 from "@/assets/UsingProduct/howtouse_3.gif";
import gif4 from "@/assets/UsingProduct/howtouse_4.gif";
import { UsingGif } from "@/types";

import UsingProduct from "./UsingProduct";

const howToUse: UsingGif[] = [
  {
    img: img1,
    gif: gif1,
    text: "1. 전원 버튼을 약 2초 이상 눌러, 전원을 켜주세요.\n기기와 전극을 연결하고, 일회용 전극단추가 ‘딸깍’ 소리가 나도록 결합해주세요",
  },
  {
    img: img2,
    gif: gif2,
    text: "2. 기기는 가슴의 평평한 부분에 왼쪽 방향으로 기울인 다음,\n일회용 전극의 돌출된 부분이 왼쪽 위를 향하도록 부착해주세요.",
    subText:
      "*기기를 부착하기 전, 반드시 알콜솜 또는 물티슈 등으로 부착하려는 부위를 닦은 뒤 완전히 건조시켜주세요.",
  },
  {
    img: img3,
    gif: gif3,
    text: "3. 전극 뒷면의 보호필름을 제거한 후,\n기기를 가슴 방향으로 힘을 주어 10초 이상 꾹 눌러주세요.",
  },
  {
    img: img4,
    gif: gif4,
    text: "4.측정 후, 우측 상단의 빨간 자물쇠 버튼을 눌러 잠금모드를 해제해주세요.\nx 버튼을 누른 후, 확인을 누르면 측정이 종료됩니다.",
  },
];

const DetailProduct = ({ productImage, message }: { productImage: string[]; message: string }) => {
  return (
    <Container>
      {productImage &&
        productImage.map((image, idx, arr) => {
          if (message === "first" && arr[7] !== image && arr[3] !== image) {
            return (
              <div
                key={idx}
                className={`image${idx + 1}`}
              >
                <img
                  src={image}
                  alt={`이미지${idx + 1}`}
                />
              </div>
            );
          }
          if (message === "first" && arr[3] === image) {
            return (
              <div
                key={idx}
                className={`image${idx + 1}`}
              >
                <div className="title">
                  하이카디플러스
                  <br />
                  간단 사용법
                  <br />
                  <div className="hoverMessage">*이미지에 마우스 커서를 올려주세요!</div>
                </div>
                <div className="usingGif">
                  {howToUse.map((item) => (
                    <UsingProduct
                      img={item.img}
                      gif={item.gif}
                      text={item.text}
                      subText={item.subText}
                    />
                  ))}
                </div>
              </div>
            );
          }
          if (message === "last" && image === arr[7]) {
            return (
              <>
                <div
                  key={idx}
                  className={`image${idx + 1}`}
                >
                  <img
                    src={image}
                    alt={`이미지${idx + 1}`}
                  />
                </div>
              </>
            );
          }
        })}
    </Container>
  );
};
const Container = styled.div`
  width: 1415px;
  margin: auto;
  div {
    zoom: 0.8;
    display: flex;
  }
  img {
    margin: 0 auto;
  }

  .image1 {
    margin-top: 135px;
  }
  .image2,
  .image4 {
    margin-top: 240px;
  }
  .image3 {
    margin-top: 330px;
  }
  .image4 {
    zoom: 0.85;
    display: flex;
    flex-direction: column;
  }
  .image4 .title {
    margin: 0 auto 114px;
    text-align: center;
    color: var(--color_font, #1e1e1e);
    font-family: NotoSansBold;
    font-size: 55px;
    line-height: 1.6em;
    display: flex;
    flex-direction: column;
  }

  .image5 {
    margin-top: 376px;
    position: relative;
    flex-direction: column;
    z-index: 12;
  }

  .image5::before {
    content: "구성품";
    width: auto;
    height: auto;
    display: block;
    font-size: 40px;
    color: var(--color_font);
    font-family: NotoSansBold;
    margin-left: 175px;
    margin-bottom: 144px;
  }
  .image5::after {
    content: "제품 구매 시 구성품을 확인하세요.";
    width: auto;
    height: auto;
    display: block;
    font-size: 32px;
    color: var(--color_sub3);
    font-family: NotoSansMedium;
    position: absolute;
    top: 80px;
    left: 0;

    margin-left: 175px;
  }
  .image5 img {
    background-color: var(--color_sub5);

    background-size: cover;
  }
  .image6 {
    margin: 240px auto 254px;
  }
  .image7 {
    margin: 0 auto 254px;
  }
  .image8 {
    margin: 240px auto 372px;
  }
  .usingGif {
    width: 100%;
    height: 1300px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
  .hoverMessage {
    color: var(--color_sub3);
    text-align: center;
    font-family: NotoSansMedium;
    font-size: 36px;
    line-height: 1.6em;
    margin: 20px auto;
  }
`;
export default DetailProduct;
