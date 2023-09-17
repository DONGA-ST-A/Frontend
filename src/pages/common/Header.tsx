import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";

import { toastState, userState } from "@/Atoms";
import SearchIcon from "@/assets/icon/search_icon.svg";
import Logo from "@/assets/logo/logo_blue.svg";
import { Inner } from "@/style/commonStyle";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const setToast = useSetRecoilState(toastState);

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
              <li className={pathname.includes("/company") ? "active" : ""}>
                <Link to="/company">회사 소개</Link>
              </li>
              <li className={pathname.includes("/product") ? "active" : ""}>
                <Link to="/product">제품 구매</Link>
              </li>
              <li className={pathname.includes("/faq") ? "active" : ""}>
                <Link to="/faq">FAQ</Link>
              </li>
              <li className={pathname.includes("/notice") ? "active" : ""}>
                <Link to="/notice">공지사항</Link>
              </li>
            </ul>
          </LeftNav>
          <RightNav>
            <div
              className="search"
              onClick={() => {
                setToast("기능 준비중입니다.");
                setTimeout(() => {
                  setToast("");
                }, 1100);
              }}
            >
              <img
                src={SearchIcon}
                alt="검색"
                width={15}
              />
            </div>
            {currentUser ? (
              <div className="button-container">
                <button
                  className="whiteBtn"
                  onClick={() => {
                    setCurrentUser(undefined);
                  }}
                >
                  로그아웃
                </button>
                <button
                  className="blueBtn"
                  onClick={() => {
                    setToast("페이지 준비중입니다.");
                    setTimeout(() => {
                      setToast("");
                    }, 1100);
                  }}
                >
                  마이페이지
                </button>
              </div>
            ) : (
              <div className="button-container">
                <button className="whiteBtn">
                  <Link to="/login">로그인</Link>
                </button>
                <button
                  className="blueBtn"
                  onClick={() => {
                    setToast("페이지 준비중입니다.");
                    setTimeout(() => {
                      setToast("");
                    }, 1100);
                  }}
                >
                  회윈가입
                </button>
              </div>
            )}
          </RightNav>
        </Nav>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  border-bottom: 1px solid var(--color_sub1);

  li:hover {
    color: var(--color_main_skyblue);
    opacity: 0.5;
  }
  li.active {
    color: var(--color_main_skyblue);
  }
`;
const Nav = styled.div`
  display: flex;
  position: relative;
  height: 56px;
  font-family: NotoSansBold;
  color: var(--color_font);
  font-size: var(--text_body1);
  line-height: 1.6em;
  margin: 64px auto 35px;
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

  .button-container {
    display: flex;
  }

  button {
    padding: 12px 40px;
    border-radius: 36px;
    border: none;
    font-family: NotoSansBold;
    color: var(--color_font);
    font-size: var(--text_body1);
    line-height: 1.6em;
    cursor: pointer;
  }
  .whiteBtn {
    border: 1px solid var(--color_sub1);
    background-color: var(--color_white);
    margin: 0 12px;
  }
  .blueBtn {
    color: var(--color_white);
    background-color: var(--color_main_skyblue);
  }
`;
export default Header;
