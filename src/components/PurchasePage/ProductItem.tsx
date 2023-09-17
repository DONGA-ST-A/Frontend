import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";

import { toastState } from "@/Atoms";
import CartIcon from "@/assets/icon/icon_cart.svg";
import FavoriteIcon from "@/assets/icon/icon_favorite.svg";
import { ProductData } from "@/types";

import Toast from "../etc/Toast";

const ProductItem = ({ product, addProduct }: { product: ProductData; addProduct: string }) => {
  const handleIconClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
  };
  const [toast, setToast] = useRecoilState(toastState);
  const navigate = useNavigate();
  const DetailPageRouting = () => {
    if (product.id !== 9) {
      navigate(`/product/${product.id}`);
    } else {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 1000);
    }
  };

  return (
    <Container $addProduct={addProduct}>
      {toast ? <Toast message="품절된 상품입니다." /> : ""}
      <div
        className="link"
        onClick={DetailPageRouting}
      >
        <ImgContainer
          $main={product.tags.includes("기기 본체")}
          $addProduct={addProduct}
        >
          {product.status === "품절" && <SoldOut>품절된 상품입니다.</SoldOut>}
          <img
            alt={product.name}
            src={product.previewImage}
          />
          <div className="tag-list">
            {product.tags.map((item) => (
              <div
                key={item}
                className="tag"
              >
                #{item}
              </div>
            ))}
          </div>
        </ImgContainer>
      </div>
      <InfoContainer
        $main={product.tags.includes("기기 본체")}
        $addProduct={addProduct}
      >
        <div className="product-name-container">
          <div
            className="link"
            onClick={DetailPageRouting}
          >
            <h1>{product.name}</h1>
          </div>
          <div className="description">{product.subname}</div>
        </div>
        <div className="product-container">
          <h1>{product.price ? `${product.price.toLocaleString()}원` : null}</h1>
          <div className="icon-container">
            <img
              alt="장바구니"
              src={CartIcon}
              onClick={handleIconClick}
            />
            <img
              alt="찜"
              src={FavoriteIcon}
              onClick={handleIconClick}
            />
          </div>
        </div>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div<{ $addProduct: string }>`
  width: 397px;
  height: 478px;
  border-radius: 9px;
  position: relative;
  margin-right: ${(props) => (props.$addProduct === "addProduct" ? "60px" : "")};
  border: ${(props) => (props.$addProduct === "addProduct" ? "5px solid var(--color_sub1)" : "")};
  .link {
    cursor: pointer;
  }
`;

const SoldOut = styled.div`
  background-color: rgba(104, 104, 104, 0.7);
  height: 250px;
  width: 397px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color_white);
  font-family: NotoSansMedium;
  font-size: 23px;
  border-radius: 8px 8px 0px 0px;
  border: none;
  z-index: 5;
`;

const ImgContainer = styled.div<{ $main: boolean; $addProduct: string }>`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 9px 9px 0px 0px;
  border: solid 0.7px;
  border-color: ${(props) => (props.$main ? "var(--color_sub4)" : "var(--color_sub1)")};
  background-color: var(--color_white);
  border-top: ${(props) =>
    props.$addProduct === "addProduct" ? "1px solid var(--color_sub1)" : ""};

  img {
    width: 212px;
    height: 164px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      width: 280px;
      height: 205px;
    }
  }

  .tag-list {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 10px;
    left: 15px;
    z-index: 8;

    .tag {
      padding: 7px 18px;
      border: solid 0.7px;
      border-radius: 20px;
      border-color: var(--color_sub1);
      color: var(--color_font);
      background-color: var(--color_white);
      font-family: NotoSansMedium;
      font-size: 11.5px;
      margin: 0px 6px;
      text-align: center;
    }
  }
`;

const InfoContainer = styled.div<{ $main: boolean; $addProduct: string }>`
  height: 175px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0px 0px 9px 9px;
  border: solid 0.7px;
  border-top: solid 5px;
  border-color: ${(props) => (props.$main ? "var(--color_sub4)" : "var(--color_sub1)")};
  border-bottom: ${(props) =>
    props.$addProduct === "addProduct" ? "5px solid var(--color_sub1)" : ""};
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
    font-size: 23px;
  }

  .product-name-container {
    .description {
      color: var(--color_sub3);
      font-family: NotoSansMedium;
      font-size: 11.5px;
      margin-top: 15px;
    }
  }

  .product-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-container {
      display: flex;
      gap: 15px;

      img {
        width: 41px;
        cursor: pointer;
      }
    }
  }
`;
export default ProductItem;
