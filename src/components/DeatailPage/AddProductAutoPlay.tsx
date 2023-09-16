import styled from "styled-components";

import { ProductData } from "@/types";

import ArrowBtn from "../MainPage/ArrowBtn";
import ProductItem from "../PurchasePage/ProductItem";
const AddProductAutoPlay = ({ productAddItem }: { productAddItem: ProductData[] }) => {
  return (
    <Container>
      <Title>
        <div className="mainTitle">이 제품은 어떠세요?</div>
        <div className="subTitle">추가 구매 시 기기의 효율이 높아집니다.</div>
      </Title>
      <AddProducts>
        {productAddItem.concat(productAddItem).map((product) => (
          <ProductItem
            product={product}
            addProduct={"addProduct"}
          />
        ))}
      </AddProducts>
      <div className="Btn">
        <ArrowBtn
          text={"전체 상품 보러가기"}
          link={"/product"}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_background);
  overflow: hidden;
  .Btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 81px;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 61px;
  .mainTitle {
    color: var(--color_font);
    font-family: NotoSansBold;
    font-size: 29px;
    line-height: 1.6em;
  }
  .subTitle {
    color: var(--color_sub3);
    font-family: NotoSansMedium;
    font-size: 24px;
    line-height: 1.6em;
  }
`;

const AddProducts = styled.div`
  background-color: var(--color_background);
  margin: 60px auto;

  display: flex;
  position: relative;
  left: -100px;
  width: calc(457px * 10);
  animation: autoPlay 17s linear infinite;

  @keyframes autoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-457px * 5));
    }
  }
`;

export default AddProductAutoPlay;
