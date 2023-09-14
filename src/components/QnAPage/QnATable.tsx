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
            <QnATableItem qna={item} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  font-family: NotoSansMedium;
  font-size: var(--text_body1);
  display: flex;
  flex-direction: column;

  thead {
    background-color: var(--color_background);
    color: var(--color_font);
    border: 1px solid;
    border-color: var(--color_sub3);
  }

  th {
    //border: 1px solid black;
    padding: 18px 0px;
  }

  tbody {
    background-color: var(--color_white);
    color: var(--color_sub3);
  }

  th {
    //padding: 18px 40px;
  }
`;

export default QnATable;
