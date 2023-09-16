import { useState, useEffect } from "react";

import { styled } from "styled-components";

import { DetailCategoryProps } from "@/types";

const categories: DetailCategoryProps[] = [
  { category: "상품 상세정보", location: 0 },
  { category: "상품 사용법", location: 2975 },
  { category: "상품 구성", location: 4029 },
  { category: "상품구매안내", location: 7840 },
];

const DetailCategory = () => {
  const [scrollLocation, setScrollLocation] = useState<number>(0);
  const onScroll = () => {
    setScrollLocation(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollLocation]);
  return (
    <Container>
      <div className="category">
        {categories.map((item, idx, arr) => (
          <li
            className={
              item.location < scrollLocation + 5 &&
              scrollLocation < (arr[idx + 1]?.location || item.location + 1000)
                ? "active"
                : ""
            }
            key={idx}
            onClick={() => {
              window.scrollTo({
                top: item.category === "상품 상세정보" ? 745 : item.location,
                behavior: "smooth",
              });
            }}
          >
            {item.category}
          </li>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_background);
  padding: 26px 297px 0;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  top: 0;
  z-index: 9999;
  @media (max-width: 740px) {
    & {
      position: relative;
    }
  }

  .category {
    max-width: 935px;
    display: flex;
    height: 60px;
    justify-content: space-between;
    margin: auto;
  }

  li {
    width: 163px;
    list-style: none;
    color: var(--color_font);
    text-align: center;
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
    line-height: 1.6em;
    cursor: pointer;
  }
  li:nth-child(2),
  li:nth-child(3) {
    width: 140px;
  }

  li.active {
    border-bottom: 6px solid var(--color_main_skyblue);
    color: var(--color_main_skyblue);
  }
`;

export default DetailCategory;
