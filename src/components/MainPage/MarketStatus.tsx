import styled from "styled-components";

import UsageGraph from "@/assets/figure/graph_usage.svg";
import { Inner } from "@/style/commonStyle";

import MarketStatusElement from "./MarketStatusElement";
import Title from "./Title";

const problems = [
  { title: "불편함", description: "적합한 기기 대신\n환자 감시장치가 사용되어\n가중되는 불편함" },
  {
    title: "진료 사각지대",
    description: "마땅한 장비가 없어\n심전도 모니터링을 하지 못하는\n진료 사각지대 발생",
  },
  { title: "비효율", description: "중환자실과 수술실을\n제외하면 비효율적인 투자인\n환자감시장치" },
];

const MarketStatus = () => {
  return (
    <Container>
      <Inner>
        <Title
          titleEn="ECG bedside detection market status"
          titleKo="심전도 침상감지 시장 현황"
        />
        <InnerContainer>
          <GraphContainer>
            <img
              alt="최근 5년간 심전도 침상감시 실시 건수"
              src={UsageGraph}
              width="464"
            />
            <p>
              <div>지난 5년 간 심전도 침상감지 실시 건수는</div>
              <div>약 50% 증가했습니다.</div>
            </p>
          </GraphContainer>
          <ProblemContainer>
            <h1>환자감시장치의 문제점</h1>
            <div className="element-container">
              {problems.map((problem) => (
                <MarketStatusElement
                  key={problem.title}
                  title={problem.title}
                  description={problem.description}
                />
              ))}
            </div>
            <p>
              <div>심전도 침상감시가 필요한 상황이지만</div>
              <div>환자감시장치 (산소 포화도, 혈압, 호흡 등) 기기가 사용되고 있습니다.</div>
            </p>
          </ProblemContainer>
        </InnerContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color_background);
  padding-top: 72px;
  padding-bottom: 177px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
`;

const GraphContainer = styled.div`
  p {
    font-family: NotoSansBold;
    font-size: 24px;
    line-height: 1.6em;
    margin-top: 7px;
  }
`;

const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: NotoSansBold;
    font-size: 24px;
  }

  p {
    font-family: NotoSansMedium;
    font-size: 15px;
    text-align: center;
    line-height: 1.6em;
  }

  .element-container {
    display: flex;
    flex-direction: row;
    margin: 18px 0px;
  }
`;

export default MarketStatus;
