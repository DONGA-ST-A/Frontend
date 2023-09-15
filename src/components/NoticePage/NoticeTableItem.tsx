import styled from "styled-components";

import FileIcon from "@/assets/icon/icon_file.svg";
import { NoticeData } from "@/types";

const NoticeTableItem = ({
  notice,
  main,
  id,
}: {
  notice: NoticeData;
  main: boolean;
  id: number;
}) => {
  //const [active, setActvie] = useState<boolean>(false);
  console.log(id);
  return (
    <>
      <Notice>
        <td
          width="9%"
          className={main ? "main-td" : "default-td"}
        >
          {main ? <Main>공지</Main> : id}
        </td>
        <td
          width="11%"
          className={main ? "main-title" : ""}
        >
          {notice.category}
        </td>
        <td
          width="56%"
          className={`title ${main && "main-title"}`}
        >
          <span>{notice.title}</span>
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

  span {
    cursor: pointer;
  }

  td,
  .default-td {
    padding: 18px 0px;
    text-align: center;
    vertical-align: middle;
  }

  .main-td {
    padding: 8px 0px;
  }

  .main-title {
    font-family: NotoSansBold;
  }

  .title {
    text-align: left;
    padding-left: 35px;
    padding-right: 35px;
  }
`;

const Main = styled.div`
  padding: 11px 20px;
  background-color: var(--color_main_skyblue);
  color: var(--color_white);
  font-family: NotoSansBold;
  font-size: bar(--text_body1);
  border-radius: 20px;
  display: inline-block;
`;

export default NoticeTableItem;
