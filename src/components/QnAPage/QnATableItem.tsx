import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";

import { QnAData } from "@/types";

const QnATableItem = ({ qna }: { qna: QnAData }) => {
  const [active, setActvie] = useState<boolean>(false);
  return (
    <>
      <Question $active={active}>
        <td width="8%">{qna.id}</td>
        <td width="12%">{qna.category}</td>
        <td
          width="72%"
          className="question"
        >
          {qna.question}
        </td>
        <td width="8%">
          {active ? (
            <IoIosArrowUp
              size="30"
              className="toggle"
              onClick={() => {
                setActvie(false);
              }}
            />
          ) : (
            <IoIosArrowDown
              size="30"
              className="toggle"
              onClick={() => {
                setActvie(true);
              }}
            />
          )}
        </td>
      </Question>
      {active && (
        <Answer>
          <td width="8%"></td>
          <td width="12%"></td>
          <td width="72%">{qna.answer}</td>
          <td width="8%"></td>
        </Answer>
      )}
    </>
  );
};

const Question = styled.tr<{ $active: boolean }>`
  background-color: var(--color_white);
  text-align: center;

  ${(props) =>
    !props.$active &&
    css`
      border-bottom: solid 1px;
      border-color: var(--color_sub2);
    `};

  td {
    padding: 18px 0px;
    text-align: center;
    vertical-align: middle;
  }

  .question {
    text-align: left;
    padding-left: 35px;
    padding-right: 35px;
  }

  .toggle {
    cursor: pointer;
  }
`;

const Answer = styled.tr`
  height: 110px;
  border-bottom: solid 1px;
  border-color: var(--color_sub2);

  td {
    padding: 20px 35px;
    font-family: NotoSansMedium;
    font-size: var(--text_body1);
    color: var(--color_font);
    line-height: 1.6em;
  }
`;

export default QnATableItem;
