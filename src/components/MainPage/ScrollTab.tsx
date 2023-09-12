import styled from "styled-components";

import AdvantageIcon from "@/assets/icon/icon_scroll_advantage.svg";
import ExpectedEffectIcon from "@/assets/icon/icon_scroll_expected_effect.svg";
import HospitalIcon from "@/assets/icon/icon_scroll_hospital.svg";
import MarketStatusIcon from "@/assets/icon/icon_scroll_market_status.svg";
import ReviewIcon from "@/assets/icon/icon_scroll_review.svg";
import { Inner } from "@/style/commonStyle";

const iconList = [
  { title: "심전도 침상감지 현황", img: MarketStatusIcon },
  { title: "하이카디만의 장점", img: AdvantageIcon },
  { title: "기대 효과", img: ExpectedEffectIcon },
  { title: "실제 현장 후기", img: ReviewIcon },
  { title: "현재 하이카디를\n사용하고 있는 병원", img: HospitalIcon },
];

const ScrollTab = () => {
  return (
    <Container>
      <Inner>
        <Slogan>24시간 환자를 케어해드립니다.</Slogan>
        <IconContainer>
          {iconList.map((icon) => (
            <Icon>
              <img
                alt={icon.title}
                src={icon.img}
              />
              <div className="title">{icon.title}</div>
            </Icon>
          ))}
        </IconContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 42px;
  padding-bottom: 156px;
`;

const Slogan = styled.div`
  font-family: NotoSansMedium;
  font-size: var(--text_headline1);
  color: var(--color_main_skyblue);
  text-align: center;
  margin-bottom: 105px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Icon = styled.button`
  font-family: NotoSansMedium;
  font-size: var(--text_body1);
  color: var(--color_sub2);
  line-height: 1.6em;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;
  width: 200px;
  height: 128px;
  border: none;
  background-color: var(--color_white);
  cursor: pointer;

  img {
    width: 80px;
    margin-bottom: 16px;
  }

  .title {
    text-align: center;
  }
`;
export default ScrollTab;
