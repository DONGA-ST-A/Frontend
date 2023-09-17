import { useState, useEffect } from "react";

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { getNoticeItem } from "@/API";
import { NoticeData } from "@/types";

const NoticeDetailPage = () => {
  const { noticeId } = useParams();
  const id = noticeId ? Number(noticeId) : 0;
  const [noticeList, setNoticeList] = useState<NoticeData[]>([]);
  const navigate = useNavigate();

  const fetchNoticeItem = async () => {
    const noticeData = await getNoticeItem({ id });
    setNoticeList(noticeData);
  };

  useEffect(() => {
    fetchNoticeItem();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noticeId]);

  if (noticeList.length > 0)
    return (
      <Container>
        <NoticeInner>
          {noticeList[1] && (
            <div className="test">
              <h1>{noticeList[1].title}</h1>
              <NoticeInfo>
                <section>
                  <div className="info">
                    <span>작성일</span>
                    <span>{noticeList[1].createdDate}</span>
                  </div>
                  <div className="info">
                    <span>수정일</span>
                    <span>{noticeList[1].createdDate}</span>
                  </div>
                  <div className="info">
                    <span>작성자</span>
                    <span>하이카디 관리자</span>
                  </div>
                  <div className="info">
                    <span>조회수</span>
                    <span>{noticeList[1].views}</span>
                  </div>
                </section>
                <div className="info">
                  <span>글번호</span>
                  <span>{noticeList[1].id}</span>
                </div>
              </NoticeInfo>
            </div>
          )}
          <hr />
          {noticeList[1].file && (
            <div className="info file-container">
              <span>첨부 자료</span>
              <span className="file">{noticeList[1].file}</span>
            </div>
          )}
          {noticeList[1]
            ? noticeList[1].content !== "내용" && (
                <img
                  alt="내용"
                  src={noticeList[1].content}
                />
              )
            : null}
          <ListButton
            onClick={() => {
              navigate("/notice");
            }}
          >
            <BsFillGrid3X3GapFill />
            <span>목록</span>
          </ListButton>
          <NoticeTable>
            <tbody>
              {noticeList[0] && (
                <tr
                  onClick={() => navigate(`/notice/${noticeList[0].category}/${noticeList[0].id}`)}
                >
                  <td
                    width="10%"
                    className="header"
                  >
                    이전 글
                  </td>
                  <td width="10%">{noticeList[0].category}</td>
                  <td
                    width="60%"
                    className="notice-table-title"
                  >
                    {noticeList[0].title}
                  </td>
                  <td width="20%">{noticeList[0].createdDate}</td>
                </tr>
              )}
              {noticeList[2] && (
                <tr
                  onClick={() => navigate(`/notice/${noticeList[2].category}/${noticeList[2].id}`)}
                >
                  <td
                    width="10%"
                    className="header"
                  >
                    다음 글
                  </td>
                  <td width="10%">{noticeList[2].category}</td>
                  <td
                    width="60%"
                    className="notice-table-title"
                  >
                    {noticeList[2].title}
                  </td>
                  <td width="20%">{noticeList[2].createdDate}</td>
                </tr>
              )}
            </tbody>
          </NoticeTable>
        </NoticeInner>
      </Container>
    );
};

const Container = styled.div`
  margin-top: 76px;
  margin-bottom: 170px;
`;

const NoticeInner = styled.div`
  max-width: 1230px;
  min-width: 1064px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .test {
    width: 100%;
  }

  hr {
    width: 100%;
    border: solid 1px;
    margin-top: 18px;
    margin-bottom: 30px;
    border-color: var(--color_sub2);
  }

  h1 {
    font-family: NotoSansBold;
    font-size: var(--text_title1);
    color: var(color_font);
    padding: 30px 0px;
  }

  .info {
    display: flex;
    gap: 16px;
    font-family: NotoSansMedium;
    font-size: var(--text_caption1);
    color: var(--color_sub3);
  }

  .file-container {
    width: 100%;
    justify-content: flex-end;

    .file {
      text-decoration: underline;
      text-underline-offset: 4px;
      cursor: pointer;
    }
  }

  img {
    margin-top: 50px;
  }
`;

const NoticeInfo = styled.div`
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    gap: 40px;
  }
`;

const NoticeTable = styled.table`
  width: 100%;
  font-family: NotoSansMedium;
  font-size: var(--text_body1);
  color: var(--color_sub3);

  tbody {
    width: 100%;

    tr {
      border-top: solid 1px;
      border-bottom: solid 1px;
      border-color: var(--color_sub2);
      cursor: pointer;

      .notice-table-title {
        text-align: left;
        padding: 0px 10px;
      }

      td {
        text-align: center;
        padding: 18px 0px;
      }

      .header {
        font-family: NotoSansBold;
      }
    }
  }
`;

const ListButton = styled.button`
  padding: 12px 0px;
  border: solid 1px;
  border-color: var(--color_sub1);
  border-radius: 30px;
  width: 150px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  font-family: NotoSansBold;
  font-size: var(--text_body1);
  color: var(--color_font);
  margin: 50px 0px;
  cursor: pointer;
`;

export default NoticeDetailPage;
