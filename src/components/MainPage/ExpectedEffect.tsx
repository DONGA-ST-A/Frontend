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
        <div>
          <img
            alt="dummy"
            src={DummyIcon}
          />
          <div>
            <div>환자</div>
            <ul>
              <li>가벼운 무게와 선이 없는 편안함</li>
              <li>병실에서 간단한 샤워 가능</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            alt="dummy"
            src={DummyIcon}
          />
          <div>
            <div>의료진</div>
            <ul>
              <li>중앙모니터링으로 환자 감시 및 바이탈 측정</li>
              <li>환내, 외래환자에게 홀터검사(행위수가)도 가능</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            alt="dummy"
            src={DummyIcon}
          />
          <div>
            <div>병원</div>
            <ul>
              <li>의료진 부족문제 해결</li>
              <li>스마트병원, 스마트병동 ➡️ 이미지, 신뢰도 향상</li>
              <li>간호통합병동, 격리병동, 일반병동, 회복실 등 텔레메트리 사각지대 해결</li>
              <li>행위수가를 통한 병원 수익 실현</li>
            </ul>
          </div>
        </div>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: green;
  padding: 200px 0px;
`;

export default ExpectedEffect;
