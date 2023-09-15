import { useState, useEffect } from "react";

import styled from "styled-components";

import MarketStatusIcon from "@/assets/icon/main_category1.svg";
import AdvantageIcon from "@/assets/icon/main_category2.svg";
import ExpectedEffectIcon from "@/assets/icon/main_category3.svg";
import ReviewIcon from "@/assets/icon/main_category4.svg";
import HospitalIcon from "@/assets/icon/main_category5.svg";
import { categoryProps } from "@/types";

const categoryBtn: categoryProps[] = [
  {
    img: MarketStatusIcon,
    text: "심전도 침상감지 현황",
    location: 924,
  },
  {
    img: AdvantageIcon,
    text: "하이카디만의 장점",
    location: 1536,
  },
  {
    img: ExpectedEffectIcon,
    text: "기대 효과",
    location: 2348,
  },
  {
    img: ReviewIcon,
    text: "실제 현장 후기",
    location: 3280,
  },
  {
    img: HospitalIcon,
    text: "  현재 하이카디를\n사용하고 있는 병원",
    location: 3964,
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
              : scrollLocation > 4444
              ? "lastActive"
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
  z-index: 15;
  background-color: var(--color_white);
  visibility: visible;
  opacity: 1;
  transition: 0.45s;
  &:has(li.lastActive) {
    visibility: hidden;
    opacity: 0;
  }

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
