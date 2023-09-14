import styled from "styled-components";

import { QnAData } from "@/types";

import QnATableItem from "./QnATableItem";

const QnATable = ({ qna }: { qna: QnAData[] }) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>카테고리</th>
            <th>제목</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {qna.map((item) => (
            <QnATableItem
              key={item.id}
              qna={item}
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
  height: 420px;

  thead {
    background-color: var(--color_background);
    color: var(--color_font);
    border: 1px solid;
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

export default QnATable;
