import { useState } from "react";

import { BiPlus, BiMinus } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";

import { toastState } from "@/Atoms";
import Check from "@/assets/icon/check_icon.svg";
import { Inner } from "@/style/commonStyle";
import { ProductData } from "@/types";

const toggleText: string[] = [
  "[필수] 상품을 선택해주세요.",
  "갤럭시 A13 (+275,000원)",
  "선택 안 함",
];

const ProductInfo = ({ productItem }: { productItem: ProductData }) => {
  const [activetoggle, setActiveToggle] = useState<boolean>(false);
  const [toggleName, setToggleName] = useState<string>(toggleText[0]);
  const setToast = useSetRecoilState(toastState);
  const [count, setCount] = useState<number>(1);

  const toggleBtn = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setActiveToggle(!activetoggle);
  };
  return (
    <Container onClick={() => setActiveToggle(false)}>
      <Inner>
        <div className="product">
          <ProductImg>
            <img
              src={productItem?.previewImage}
              alt="상품이미지"
              width={538}
            />
          </ProductImg>
          <ProductDetailInfo>
            <div className="name">{productItem?.name}</div>
            <div className="subName">{productItem?.subname}</div>
            <div className="tags">
              {productItem?.tags.map((tag, idx) => (
                <div
                  className="tag"
                  key={idx}
                >
                  #{tag}
                </div>
              ))}
            </div>
            <div className="price">{productItem?.price?.toLocaleString()}원</div>
            <ListToggle
              $text={toggleName}
              onClick={toggleBtn}
            >
              <div className="defaultList">
                {toggleName}
                <IoIosArrowDown />
              </div>
              {activetoggle && (
                <ul>
                  <li
                    className={toggleText[0] === toggleName ? "active" : ""}
                    onClick={() => setToggleName(toggleText[0])}
                  >
                    {toggleText[0]}
                    <img
                      src={Check}
                      alt="체크"
                      width={16}
                    />
                  </li>
                  <li
                    className={toggleText[1] === toggleName ? "active1" : ""}
                    onClick={() => {
                      setToggleName(toggleText[1]);
                      setCount(1);
                    }}
                  >
                    {toggleText[1]}
                    <img
                      src={Check}
                      alt="체크"
                      width={16}
                    />
                  </li>
                  <li
                    className={toggleText[2] === toggleName ? "active2" : ""}
                    onClick={() => {
                      setToggleName(toggleText[2]);
                      setCount(1);
                    }}
                  >
                    {toggleText[2]}
                    <img
                      src={Check}
                      alt="체크"
                      width={16}
                    />
                  </li>
                </ul>
              )}
            </ListToggle>
            {toggleName !== toggleText[0] ? (
              <div className="count">
                <div className="innerCount">
                  <div className="text">
                    하이카디플러스 HiCardi+
                    <br />
                    {toggleName === toggleText[1]
                      ? "갤럭시 A13 (+275,000원)"
                      : toggleName === toggleText[2]
                      ? "-선택 안 함"
                      : ""}
                  </div>
                  <div className="countingBtn">
                    {count > 1 ? (
                      <BiMinus
                        onClick={() => setCount(count - 1)}
                        style={{ width: "25px", height: "25px", cursor: "pointer" }}
                      />
                    ) : (
                      <BiMinus style={{ width: "25px", height: "25px" }} />
                    )}
                    {count}
                    <BiPlus
                      onClick={() => setCount(count + 1)}
                      style={{ width: "25px", height: "25px", cursor: "pointer" }}
                    />
                  </div>
                  <div className="countPrice">
                    {toggleName === toggleText[1]
                      ? ((productItem.price + 275000) * count).toLocaleString()
                      : toggleName === toggleText[2]
                      ? (productItem.price * count).toLocaleString()
                      : ""}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="allPurchase">
              <div className="allPrice"> 총 구매금액 : </div>
              <div className="allNumberPrice">
                &nbsp;
                {toggleName === toggleText[0]
                  ? "0"
                  : toggleName === toggleText[1]
                  ? ((productItem.price + 275000) * count).toLocaleString()
                  : (productItem.price * count).toLocaleString()}
                원
              </div>
            </div>

            <button
              className="purchaseBtn"
              onClick={() => {
                setToast("페이지 준비중입니다.");
                setTimeout(() => {
                  setToast("");
                }, 1100);
              }}
            >
              구매하기
            </button>
            <div className="subBtn">
              <button
                className="basket"
                onClick={() => {
                  setToast("기능 준비중입니다.");
                  setTimeout(() => {
                    setToast("");
                  }, 1100);
                }}
              >
                장바구니 추가
              </button>
              <button
                className="wish"
                onClick={() => {
                  setToast("기능 준비중입니다.");
                  setTimeout(() => {
                    setToast("");
                  }, 1100);
                }}
              >
                위시리스트에 담기
              </button>
            </div>
          </ProductDetailInfo>
        </div>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_white);
  padding: 80px 0 135px;
  .product {
    display: flex;
    justify-content: space-between;
  }
  button {
    cursor: pointer;
  }
`;

const ProductImg = styled.div``;

const ProductDetailInfo = styled.div`
  width: 600px;
  background-color: var(--color_white);
  display: flex;
  flex-direction: column;
  gap: 15px;
  .name {
    font-family: NotoSansBold;
    font-size: var(--text_subtitle1);
    line-height: 1.6em;
    color: var(--color_font);
  }
  .subName {
    font-family: NotoSansMedium;
    font-size: var(--text_caption1);
    line-height: 1.6em;
    color: var(--color_sub3);
    white-space: pre-wrap;
  }
  .tags {
    display: flex;
    gap: 12px;
  }
  .tag {
    border-radius: 36px;
    border: 1px solid var(--color_sub1);
    font-size: var(--text_caption1);
    font-family: NotoSansMedium;
    color: var(--color_font);
    line-height: 1.6em;
    padding: 8px 24px;
    box-sizing: border-box;
  }
  .price {
    font-family: NotoSansBold;
    font-size: var(--text_title1);
    line-height: 1.6em;
    color: var(--color_main_skyblue);
  }
  .allPurchase {
    display: flex;
    height: 38px;
    position: relative;
  }
  .allPrice {
    font-family: NotoSansMedium;
    color: var(--color_sub3);
    font-size: var(--text_body1);
    line-height: 1.6em;
    position: absolute;
    bottom: 0;
  }
  .allNumberPrice {
    font-family: NotoSansBold;
    color: var(--color_font);
    font-size: var(--text_subtitle1);
    position: absolute;
    left: 110px;
  }
  .purchaseBtn {
    width: 100%;
    border-radius: 36px;
    font-family: NotoSansBold;
    font-size: var(--text_body1);
    color: var(--color_white);
    line-height: 1.6em;
    background-color: var(--color_main_skyblue);
    border: none;
    padding: 12px 257.5px;
  }
  .subBtn {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .subBtn button {
    width: 279px;
    border-radius: 36px;
    font-family: NotoSansBold;
    font-size: var(--text_body1);
    color: var(--color_font);
    line-height: 1.6em;
    background-color: var(--color_white);
    border: 1px solid var(--color_sub1);
    padding: 12px 0;
  }

  .count {
    width: calc(100% - 10px);
    height: 96px;
    border-radius: 8px;
    background-color: var(--color_background);
    padding: 22px 26px 22px 33px;
    box-sizing: border-box;
  }
  .innerCount {
    width: 531px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    font-family: NotoSansBold;
    font-size: 16px;
    line-height: 1.6em;
    color: var(--color_font);
  }
  .countingBtn {
    width: 95px;
    border-radius: 36px;
    padding: 8px 12px;
    font-family: NotoSansMedium;
    font-size: 16px;
    line-height: 1.6em;
    color: var(--color_font);
    border: 1px solid var(--color_sub1);
    background-color: var(--color_white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
  }
  .countPrice {
    color: var(--color_font);
    text-align: right;
    font-family: NotoSansBold;
    font-size: 16px;
    line-height: 1.6em;
  }
`;

const ListToggle = styled.div<{ $text: string }>`
  width: 590px;
  padding: 16px 36px 17px 58px;
  border: 1px solid var(--color_background);
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: ${(props) => (props.$text === "[필수] 상품을 선택해주세요." ? "98px" : 0)};
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  .defaultList {
    font-size: var(--text_body1);
    color: var(--color_sub3);
    font-family: NotoSansMedium;
    width: 496px;
    display: flex;
    justify-content: space-between;
  }
  ul {
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
    color: var(--color_font);
    position: absolute;
    top: 0;
    left: 0;
    width: 590px;
    height: auto;
    padding: 16px 36px 17px 58px;
    border: 1px solid var(--color_background);
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0px 3px 6px 0px rgba(88, 88, 88, 0.25);
    z-index: 1;
    background-color: var(--color_white);
  }
  ul li {
    cursor: pointer;
  }
  ul li:nth-child(1) {
    border-bottom: 1px solid var(--color_background);
    padding-bottom: 16px;
  }
  ul li img {
    opacity: 0;
    position: absolute;
    left: 25px;
  }
  ul li.active img {
    top: 23px;
    opacity: 1;
    /* top: ${(props) => (props.$text === "[필수] 상품을 선택해주세요." ? 23 : 0)};
    top: ${(props) => (props.$text === "갤럭시 A13 (+275,000원)" ? 50 : 0)};
    top: ${(props) => props.$text === "선택 안 함" && 70}; */
  }
  ul li.active1 img {
    top: 75px;
    opacity: 1;
  }
  ul li.active2 img {
    top: 110px;
    opacity: 1;
  }
`;

export default ProductInfo;
