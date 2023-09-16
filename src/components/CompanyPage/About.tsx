import styled from "styled-components";

import Icon1 from "@/assets/icon/icon_about_1.svg";
import Icon2 from "@/assets/icon/icon_about_2.svg";
import Icon3 from "@/assets/icon/icon_about_3.png"; // svg로 하면 테두리 이슈 발생
import Icon4 from "@/assets/icon/icon_about_4.svg";
import { Inner } from "@/style/commonStyle";

const AboutList = [
  { icon: Icon1, description: "최첨단 연구소" },
  { icon: Icon2, description: "뛰어난 연구 인력" },
  { icon: Icon3, description: "최적의 연구 인프라" },
  { icon: Icon4, description: "글로벌 신약 개발" },
];

const About = () => {
  return (
    <Container>
      <Inner>
        <InnerContainer>
          <TextContainer>
            <span>동아ST는 </span>
            <span className="point">글로벌 제약기업</span>
            <span>을 향해 도약합니다</span>
          </TextContainer>
          <IconContainer>
            {AboutList.map((item) => (
              <div className="icon-section">
                <img
                  alt={item.description}
                  src={item.icon}
                />
                <span>{item.description}</span>
              </div>
            ))}
          </IconContainer>
        </InnerContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 56px;
  margin-bottom: 80px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const TextContainer = styled.h1`
  font-family: NotoSansMedium;
  font-size: var(--text_title1);
  color: var(--color_font);

  .point {
    color: var(--color_main_skyblue);
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 110px;

  .icon-section {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 55px;
      height: 87px;
      object-fit: scale-down;
    }

    span {
      font-family: NotoSansBold;
      font-size: var(--text_body1);
      color: var(--color_font);
    }
  }
`;

export default About;
