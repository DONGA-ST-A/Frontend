import styled from "styled-components";

import WonjuMedicalLogo from "@/assets/hospitalLogo/logo_gangwon_state_wonju_medical_center.svg";
import SeveranceLogo from "@/assets/hospitalLogo/logo_severance_hospital.svg";
import WonjuSeveranceLogo from "@/assets/hospitalLogo/logo_wonju_severance_christian_hospital.svg";
import { Inner, Title, TitleContainer, TitleEn, TitleKo, VerticalLine } from "@/style/commonStyle";

const Hospital = () => {
  return (
    <Container>
      <Inner>
        <InnerContainer>
          <TitleContainer>
            <VerticalLine />
            <Title>
              <TitleEn>Hospitals currently using HiCardi</TitleEn>
              <TitleKo>현재 하이카디를 사용하고 있는 병원</TitleKo>
            </Title>
          </TitleContainer>
          <HospitalContainer>
            <HospitalBanner>
              <img
                alt="원주세브란스기독병원"
                src={WonjuSeveranceLogo}
                height="55"
              />
              <div>
                <div>생체신호 모니터링 심층 서비스</div>
                <div>신생아 집중치료실</div>
              </div>
            </HospitalBanner>
            <HospitalBanner>
              <img
                alt="세브란스병원"
                src={SeveranceLogo}
                height="55"
              />
              <div>
                <div>응급실 / 중환자실</div>
                <div>&nbsp;</div>
              </div>
            </HospitalBanner>
            <HospitalBanner>
              <img
                alt="강원특별자치도원주의료원"
                src={WonjuMedicalLogo}
                height="55"
              />
              <div>
                <div>COVID 19 강원 치료센터</div>
                <div>&nbsp;</div>
              </div>
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
  font-size: 14.8px;
  height: 120px;
  line-height: 1.6em;
  text-align: center;
`;

export default Hospital;
