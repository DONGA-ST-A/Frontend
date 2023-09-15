import styled from "styled-components";

import FileIcon from "@/assets/icon/icon_file.svg";
import { NoticeData } from "@/types";

const NoticeTableItem = ({ notice }: { notice: NoticeData }) => {
  //const [active, setActvie] = useState<boolean>(false);
  return (
    <>
      <Notice>
        <td width="9%">{notice.id}</td>
        <td width="11%">{notice.category}</td>
        <td
          width="56%"
          className="question"
        >
          {notice.title}
        </td>
        <td width="11%">
          {notice.file ? (
            <img
              alt="첨부파일"
              src={FileIcon}
            />
          ) : null}
        </td>
        <td width="13%">{notice.createdDate}</td>
      </Notice>
    </>
  );
};

const Notice = styled.tr`
  background-color: var(--color_white);
  text-align: center;

  border-bottom: solid 1px;
  border-color: var(--color_sub2);

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

export default NoticeTableItem;
