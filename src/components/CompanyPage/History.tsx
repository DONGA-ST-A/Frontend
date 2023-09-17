import styled from "styled-components";

import Icon1 from "@/assets/icon/icon_history_1.svg";
import Icon2 from "@/assets/icon/icon_history_2.svg";
import Icon3 from "@/assets/icon/icon_history_3.svg";
import Icon4 from "@/assets/icon/icon_history_4.svg";
import { Inner } from "@/style/commonStyle";

import CompanyTitle from "./CompanyTitle";

const historyList = [
  { img: Icon1, title: "창립일", description: "2013년 03월 01일" },
  { img: Icon2, title: "주식수", description: "844만주" },
  { img: Icon3, title: "자본금", description: "422억원" },
  { img: Icon4, title: "직원 수", description: "1,659명" },
];
const History = () => {
  return (
    <Container>
      <Inner>
        <CompanyTitle title="연혁" />
        <HistoryContainer>
          {historyList.map((item, idx) => (
            <div
              className="history-container"
              key={item.title}
            >
              <HistoryItem>
                <img
                  alt={item.title}
                  src={item.img}
                />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </HistoryItem>
              {idx < 3 && <VerticalLine />}
            </div>
          ))}
        </HistoryContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_white);
  text-align: center;
  padding: 86px 0px;
`;

const HistoryContainer = styled.div`
  width: 958px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 200px;

  .history-container {
    display: flex;
    gap: 95px;
    align-items: center;
  }
`;

const HistoryItem = styled.div`
  color: var(--color_font);

  img {
    width: 75px;
    margin-bottom: 37px;
  }

  h1 {
    font-family: NotoSansBold;
    font-size: 24px;
    margin-bottom: 12px;
  }

  p {
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
  }
`;

const VerticalLine = styled.hr`
  border: solid 2px;
  border-color: var(--color_main_skyblue);
  height: 54px;
`;

export default History;
