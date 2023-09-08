import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import SearchIcon from "@/assets/icon/icon_search.svg";
import Logo from "@/assets/logo/logo_blue.svg";
import { Inner } from "@/style/commonStyle";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Inner>
        <Nav>
          <LeftNav>
            <img
              src={Logo}
              alt="Logo"
              width={204}
              onClick={() => navigate("/")}
            />
            <ul>
              <li>하이카디란?</li>
              <li>제품 소개</li>
              <li>FAQ</li>
              <li>공지사항</li>
            </ul>
          </LeftNav>
          <RightNav>
            <div className="search">
              <img
                src={SearchIcon}
                alt="검색"
                width={15}
              />
            </div>

            <button className="loginBtn">로그인</button>
            <button className="registerBtn">회윈가입</button>
          </RightNav>
        </Nav>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  padding: 64px 108px 35px;
`;
const Nav = styled.div`
  display: flex;
  position: relative;
  height: 56px;
  font-family: NotoSansBold;
  color: var(--color_font);
  font-size: var(--text_body2);
  line-height: 1.6em;
`;

const LeftNav = styled.div`
  display: flex;

  img {
    cursor: pointer;
  }

  ul {
    display: flex;
    margin-left: 40px;
    align-items: center;
  }
  ul li {
    margin-right: 40px;
    cursor: pointer;
  }
  ul li:nth-child(4) {
    margin-right: 0;
  }
`;
const RightNav = styled.div`
  flex-grow: 1;
  display: flex;
  position: absolute;
  right: 0;

  .search {
    border-radius: 50%;
    background-color: var(--color_white);
    border: 1px solid var(--color_sub1);
    width: 56px;
    height: 56px;
    display: flex;
    cursor: pointer;
  }

  .search img {
    margin: auto;
  }

  button {
    width: 136px;
    border-radius: 36px;
    border: none;
    font-family: NotoSansBold;
    color: var(--color_font);
    font-size: var(--text_body2);
    line-height: 1.6em;
    cursor: pointer;
  }
  .loginBtn {
    border: 1px solid var(--color_sub1);
    background-color: var(--color_white);
    margin: 0 12px;
  }
  .registerBtn {
    color: var(--color_white);
    background-color: var(--color_main_skyblue);
  }
`;
export default Header;
