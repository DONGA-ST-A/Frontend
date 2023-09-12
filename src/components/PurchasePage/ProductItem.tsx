import styled, { css } from "styled-components";

import DummyData from "@/assets/dummy_item.svg";
import CartIcon from "@/assets/icon/icon_cart.svg";
import FavoriteIcon from "@/assets/icon/icon_favorite.svg";

const ProductItem = ({ main, soldOut }: { main: boolean; soldOut: boolean }) => {
  console.log(main);
  console.log(soldOut);
  return (
    <Container $main={main}>
      <ImgContainer>
        {soldOut && <SoldOut>품절된 상품입니다.</SoldOut>}
        <img
          alt="더미 데이터"
          src={DummyData}
        />
        <TagList>
          <Tag>#Smakrt Patch</Tag>
          <Tag>#기기 본체</Tag>
        </TagList>
      </ImgContainer>
      <InfoContainer $main={main}>
        <div className="product-information">
          <div className="product">
            <h1>하이카디플러스 HiCardi+</h1>
            <div className="description">편리하게 심전도 측정, 전송 및 분석.</div>
          </div>
          <h1>2,046,000원</h1>
        </div>
        <div className="icon-container">
          <img
            alt="장바구니"
            src={CartIcon}
          />
          <img
            alt="찜"
            src={FavoriteIcon}
          />
        </div>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div<{ $main: boolean }>`
  width: 552px;
  border-radius: 12px;
  border: solid 1px;
  border-color: ${(props) => (props.$main ? "var(--color_sub4)" : "var(--color_sub1)")};
  position: relative;
`;

const ImgContainer = styled.div`
  height: 347px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 12px 12px 0px 0px;
  background-color: var(--color_white);

  img {
    width: 295px;
    height: 228px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      width: 387px;
    }
  }
`;

const SoldOut = styled.div`
  background-color: rgba(104, 104, 104, 0.7);
  height: 347px;
  width: 552px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color_white);
  font-family: NotoSansMedium;
  font-size: var(--text_subtitle1);
  border-radius: 11px 11px 0px 0px;
  border: none;
  z-index: 5;
`;

const InfoContainer = styled.div<{ $main: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 35px;
  border-top: solid 5px;
  border-radius: 0px 0px 12px 12px;

  ${(props) =>
    props.$main
      ? css`
          background-color: var(--color_sub5);
          border-top-color: var(--color_sub4);
        `
      : css`
          background-color: var(--color_background);
          border-top-color: var(--color_sub1);
        `}

  .product-information {
    height: 172px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .description {
      margin-top: 15px;
    }
  }

  h1 {
    color: var(--color_font);
    font-family: NotoSansBold;
    font-size: var(--text_subtitle1);
  }

  .description {
    color: var(--color_sub3);
    font-family: NotoSansMedium;
    font-size: var(text_caption1);
  }

  .icon-container {
    display: flex;
    align-items: flex-end;
    gap: 20px;

    img {
      width: 55px;
      cursor: pointer;
    }
  }
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 20px;
  left: 30px;
  z-index: 8;
`;

const Tag = styled.div`
  padding: 8px 24px;
  border: solid 1px;
  border-radius: 20px;
  border-color: var(--color_sub1);
  color: var(--color_font);
  background-color: var(--color_white);
  font-family: NotoSansMedium;
  font-size: var(--text_caption1);
  margin: 0px 6px;
`;
export default ProductItem;
