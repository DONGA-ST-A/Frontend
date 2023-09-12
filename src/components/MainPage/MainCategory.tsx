import { useState, useEffect } from "react";

import styled from "styled-components";

import { categoryProps } from "@/types";

const categoryBtn: categoryProps[] = [
  {
    img: "src/assets/icon/main_category1.svg",
    text: "심전도 침상감지 현황",
    location: 1250,
  },
  {
    img: "src/assets/icon/main_category2.svg",
    text: "하이카디만의 장점",
    location: 2050,
  },
  {
    img: "src/assets/icon/main_category3.svg",
    text: "기대 효과",
    location: 3100,
  },
  {
    img: "src/assets/icon/main_category4.svg",
    text: "실제 현장 후기",
    location: 4380,
  },
  {
    img: "src/assets/icon/main_category5.svg",
    text: "  현재 하이카디를\n사용하고 있는 병원",
    location: 5290,
  },
];

//스크롤 자체는 계속 움직임
//범위 안에 들어오게 되면 호버 나가면 호버 해제 -> 그다음 호버 레츠고

const MainCategory = () => {
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
      {categoryBtn.map((item, idx, arr) => (
        <li
          key={idx}
          className={
            item.location < scrollLocation + 10 &&
            scrollLocation < (arr[idx + 1]?.location || item.location + 600)
              ? "active"
              : ""
          }
          onClick={() => {
            window.scrollTo({ top: item.location, behavior: "smooth" });
          }}
        >
          <img
            src={item.img}
            alt={item.text}
            width={80}
          />
          <p>{item.text}</p>
        </li>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 124px;
  border-radius: 0 0 50px 50px;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  top: 0;
  padding: 20px 0;
  z-index: 9999;
  background-color: var(--color_white);

  li {
    width: 200px;
    list-style: none;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding-top: 20px;
    border-radius: 30px;
  }
  li.active {
    background-color: var(--color_sub5);
  }
  li.active:hover {
    opacity: 1;
  }
  li:hover {
    opacity: 0.5;
  }
  li:nth-child(5) {
    margin-right: 0;
  }
  li img {
    margin-bottom: 16px;
  }
  li p {
    white-space: pre-wrap;
    font-family: NotoSansMedium;
    font-size: var(--text_caption1);
    line-height: 1.6em;
    color: var(--color_sub2);
  }
`;

export default MainCategory;
