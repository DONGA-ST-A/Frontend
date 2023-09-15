import { useState } from "react";

import { styled } from "styled-components";

const categories: string[] = ["상품 상세정보", "상품 사용법", "상품 구성", "상품구매안내"];

const DetailCategory = () => {
  const [selectCategory, setSelectCategory] = useState<string>("상품 상세정보");
  return (
    <Container>
      <div className="category">
        {categories.map((category, idx) => (
          <li
            className={selectCategory === category ? "active" : ""}
            key={idx}
            onClick={() => setSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_background);
  padding: 26px 297px 0;

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
