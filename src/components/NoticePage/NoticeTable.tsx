import styled from "styled-components";

import { NOTICE_SIZE } from "@/API";
import { NoticeData } from "@/types";

import NoticeTableItem from "./NoticeTableItem";

const NoticeTable = ({
  notice,
  page,
  totalNotice,
}: {
  notice: NoticeData[];
  page: number;
  totalNotice: number;
}) => {
  const mainNotice = notice.filter((item) => item.isTop);
  const subNotice = notice.filter((item) => !item.isTop);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>카테고리</th>
            <th>제목</th>
            <th>첨부 자료</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {mainNotice.map((item, idx) => (
            <NoticeTableItem
              key={item.id}
              notice={item}
              main={item.isTop}
              id={idx}
            />
          ))}
          {subNotice.map((item, idx) => (
            <NoticeTableItem
              key={item.id}
              notice={item}
              main={item.isTop}
              id={totalNotice - mainNotice.length - NOTICE_SIZE * (page - 1) - idx}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: NotoSansMedium;
  font-size: var(--text_body1);
  margin-bottom: 75px;

  thead {
    background-color: var(--color_background);
    color: var(--color_font);
    border-bottom: 1px solid;
    border-color: var(--color_sub2);
  }

  th {
    padding: 18px 0px;
  }

  tbody {
    background-color: var(--color_white);
    color: var(--color_sub3);
  }
`;

export default NoticeTable;
