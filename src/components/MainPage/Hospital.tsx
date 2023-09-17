import styled from "styled-components";

import KosinLogo from "@/assets/hospitalLogo/logo_kosin_university_gospel_hospital.svg";
import SeoulLogo from "@/assets/hospitalLogo/logo_seoul_national_university_hospital.svg";
import WonjuLogo from "@/assets/hospitalLogo/logo_wonju_severance_christian_hospital.svg";
import { Inner } from "@/style/commonStyle";

import Title from "./Title";

const Hospital = () => {
  return (
    <Container>
      <Inner>
        <InnerContainer>
          <Title
            titleEn="Hospitals currently using HiCardi"
            titleKo="현재 하이카디를 사용하고 있는 병원"
          />
          <HospitalContainer>
            <HospitalBanner>
              <img
                alt="서울대학교병원"
                src={SeoulLogo}
              />
              <div>종로구 서울대학교병원</div>
            </HospitalBanner>
            <HospitalBanner>
              <img
                alt="원주세브란스기독병원"
                src={WonjuLogo}
              />
              <div>강원 원주세브란스기독병원</div>
            </HospitalBanner>
            <HospitalBanner>
              <img
                alt="고신대학교복음병원"
                src={KosinLogo}
              />
              <div>부산 고신대학교복음병원</div>
            </HospitalBanner>
          </HospitalContainer>
        </InnerContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  padding: 150px 0px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 336px;
`;

const HospitalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HospitalBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--color_sub2);
  font-family: NotoSansMedium;
  font-size: 20px;
  height: 120px;
  line-height: 1.6em;
  text-align: center;

  img {
    height: 73px;
    margin-bottom: 24px;
  }
`;

export default Hospital;
