import styled from "styled-components";

import DummyIcon from "@/assets/icon/icon_dummy.svg";
import { Inner } from "@/style/commonStyle";

import Title from "./Title";

const ExpectedEffect = () => {
  // TODO : 현재 더미 아이콘 삽입 -> 완성된 아이콘 넣기
  // TODO : CSS 적용
  return (
    <Container>
      <Inner>
        <Title
          titleEn="Expected effects of using HiCardi"
          titleKo="하이카디 사용의 기대효과"
        />
        <EffectContainer>
          <Section>
            <img
              className="icon"
              alt="dummy"
              src={DummyIcon}
              width="165"
            />
            <div className="text-container">
              <div className="text-title">환자</div>
              <ul>
                <li>가벼운 무게와 선이 없는 편안함</li>
                <li>병실에서 간단한 샤워 가능</li>
              </ul>
            </div>
          </Section>
          <Section>
            <img
              className="icon"
              alt="dummy"
              src={DummyIcon}
              width="165"
            />
            <div className="text-container">
              <div className="text-title">의료진</div>
              <ul>
                <li>중앙모니터링으로 환자 감시 및 바이탈 측정</li>
                <li>환내, 외래환자에게 홀터검사(행위수가)도 가능</li>
              </ul>
            </div>
          </Section>
          <Section>
            <img
              className="icon"
              alt="dummy"
              src={DummyIcon}
              width="165"
            />
            <div className="text-container">
              <div className="text-title">병원</div>
              <ul>
                <li>의료진 부족문제 해결</li>
                <li>스마트병원, 스마트병동 🡆 이미지, 신뢰도 향상</li>
                <li>간호통합병동, 격리병동, 일반병동, 회복실 등 텔레메트리 사각지대 해결</li>
                <li>행위수가를 통한 병원 수익 실현</li>
              </ul>
            </div>
          </Section>
        </EffectContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  padding: 185px 0px;
`;

const EffectContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 48px;
`;

const Section = styled.div`
  background-color: var(--color_sub5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 62px;
  margin: 16px 0px;

  .icon {
    padding: 0px 35px;
  }

  .text-container {
    width: 615px;
  }

  .text-title {
    font-family: NotoSansBold;
    font-size: var(--text_subtitle1);
    line-height: 1.6em;
    margin-bottom: 10px;
  }

  ul {
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
    line-height: 1.6em;
    list-style: "⦁";
    list-style-position: outside;
    padding-inline-start: 0.9em;
  }

  li {
    padding-left: 10px;
  }
`;

export default ExpectedEffect;
