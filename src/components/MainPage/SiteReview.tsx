import styled from "styled-components";

import background from "@/assets/background/site_review_background.svg";
import heart from "@/assets/icon/heart_icon.svg";
import { Inner } from "@/style/commonStyle";

import Title from "./Title";

const device = [
  {
    title: "합리적인 가격",
    description:
      "다 텔레메트리 장비는 매우 고가라 손망실에 대한 부담감이 있으나, 하이카디는 상대적 낮은 가격으로 이용할 수 있습니다.",
  },
  {
    title: "무선",
    description:
      "타 텔레메트리 장비는 선이 많은데 비해,\n 하이카디는 무선 형태라 선에 의한 사고 우려가 없습니다.",
  },
  {
    title: "가벼운 무게",
    description: "타 텔레메트리 장비들에 비해 매우 가벼워 부착이 용이합니다.",
  },
];

const skill = [
  {
    title: "환자의 상태 파악에 용이",
    description:
      "환자의 자세를 알 수 있어, 간호 스테이션에서\n 환자의 위중도를 바로 파악할 수 있습니다.",
    example:
      "ex. 누워 있는 상황에서 ECG가 좋지 않은 경우,\n 환자가 심각성을 화면을 통해 바로 파악할 수 있음",
  },
  {
    title: "의사와 환자의 원활한 커뮤니케이션",
    description:
      "발생한 이벤트별로 로그가 남고, 출력이 가능하므로\n 의사와 환자 상태에 대한 원활한 커뮤니케이션이 가능합니다.",
  },
];

const SiteReview = () => {
  return (
    <Container>
      <Inner>
        <InnerContainer>
          <Title
            titleEn="HiCardi’s Field Review"
            titleKo="하이카디 실제 현장 후기"
          />
          <div className="review-containers">
            <ReviewContainer>
              <TextInner>
                <h1>
                  기기 측면
                  <img
                    src={heart}
                    alt="하트"
                    width={17}
                  />
                </h1>
                <ul className="device">
                  {device.map((item) => (
                    <li>
                      <h1>"{item.title}"</h1>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </TextInner>
            </ReviewContainer>
            <ReviewContainer>
              <TextInner>
                <h1>
                  기능 측면
                  <img
                    src={heart}
                    alt="하트"
                    width={17}
                  />
                </h1>
                <ul className="skill">
                  {skill.map((item) => (
                    <li>
                      <h1>"{item.title}"</h1>
                      <p>{item.description}</p>
                      {item.example ? <p className="example">{item.example}</p> : ""}
                    </li>
                  ))}
                </ul>
              </TextInner>
            </ReviewContainer>
          </div>
        </InnerContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  padding: 75px 0px 111px;
  min-width: 1064px;
  background-color: red;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const InnerContainer = styled.div`
  width: 1048px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  .review-containers {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }
`;

const ReviewContainer = styled.div`
  width: 515px;
  background-color: var(--color_white);
  border-radius: 9px;
`;

const TextInner = styled.div`
  width: 408px;
  margin: 50px auto;
  h1 {
    display: flex;
    width: 357px;
    color: var(--color_font);
    font-family: NotoSansBold;
    font-size: 23px;
    line-height: 1.6em;
    gap: 8px;
    padding-bottom: 20px;
    border-bottom: 1.5px solid var(--color_sub1);
  }
  img {
    margin-bottom: 10px;
  }
  p {
    font-family: NotoSansMedium;
    font-size: 14.8px;
    line-height: 1.6em;
    white-space: pre-wrap;
  }
  ul {
    margin-top: 44px;
    display: flex;
    flex-direction: column;
  }
  ul.device {
    gap: 30px;
  }
  ul.skill {
    gap: 47px;
  }
  ul h1 {
    padding-bottom: 23px;
    width: inherit;
    border-bottom: none;
  }

  p.example {
    color: var(--color_sub2);
  }
`;

export default SiteReview;
