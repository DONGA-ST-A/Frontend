import styled, { css } from "styled-components";

import CartIcon from "@/assets/icon/icon_cart.svg";
import FavoriteIcon from "@/assets/icon/icon_favorite.svg";
import { ProductData } from "@/types";

const ProductItem = ({ product }: { product: ProductData }) => {
  const main = product.tags.includes("기기 본체");
  const price = product.price | 0;
  console.log(price);
  return (
    <Container $main={main}>
      <ImgContainer>
        {product.status === "품절" && <SoldOut>품절된 상품입니다.</SoldOut>}
        <img
          alt={product.name}
          src={product.previewImage}
        />
        <div className="tag-list">
          {product.tags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </ImgContainer>
      <InfoContainer $main={main}>
        <div className="product-name-container">
          <h1>{product.name}</h1>
          <div className="description">{product.subname}</div>
        </div>
        <div className="product-container">
          <h1>{product.price ? `${price.toLocaleString()}원` : null}</h1>
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
      height: 287px;
    }
  }

  .tag-list {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 20px;
    left: 30px;
    z-index: 8;

    span {
      padding: 8px 24px;
      border: solid 1px;
      border-radius: 20px;
      border-color: var(--color_sub1);
      color: var(--color_font);
      background-color: var(--color_white);
      font-family: NotoSansMedium;
      font-size: var(--text_caption1);
      margin: 0px 6px;
    }
  }
`;

const InfoContainer = styled.div<{ $main: boolean }>`
  height: 172px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  h1 {
    color: var(--color_font);
    font-family: NotoSansBold;
    font-size: var(--text_subtitle1);
  }

  .product-name-container {
    .description {
      color: var(--color_sub3);
      font-family: NotoSansMedium;
      font-size: var(text_caption1);
      margin-top: 15px;
    }
  }

  .product-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-container {
      display: flex;
      gap: 20px;

      img {
        width: 55px;
        cursor: pointer;
      }
    }
  }
`;
export default ProductItem;
