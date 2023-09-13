import { useState } from "react";

import { HiCheck } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";

const categoryList = ["전체", "기기 본체", "추가 용품", "추가 서비스"];
const sortList = ["신상품", "상품명", "낮은가격", "높은가격", "제조사", "사용후기"];

const CategoryBar = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (category: string) => void;
}) => {
  const [dropdown, setDropdown] = useState<string>("신상품");
  const [activeDropdown, setActvieDropdown] = useState<boolean>(false);

  return (
    <Container>
      <div>
        {categoryList.map((cate) => (
          <Button
            key={cate}
            $active={category === cate}
            onClick={() => {
              setCategory(cate);
            }}
          >
            {cate}
          </Button>
        ))}
      </div>
      <DropDown
        onMouseEnter={() => {
          setActvieDropdown(true);
        }}
        onMouseLeave={() => {
          setActvieDropdown(false);
        }}
      >
        <DropButton>
          <span>{dropdown}</span>
          <IoIosArrowDown />
        </DropButton>
        {activeDropdown && (
          <DropDownContent>
            {sortList.map((item) => (
              <DropDownItem
                key={item}
                $active={item === dropdown}
                onClick={() => setDropdown(item)}
              >
                {item === dropdown ? <HiCheck className="check" /> : <Empty />}
                <span>{item}</span>
              </DropDownItem>
            ))}
          </DropDownContent>
        )}
      </DropDown>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;
`;

const Button = styled.button<{ $active: boolean }>`
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.$active ? "var(--color_main_skyblue)" : "var(--color_sub1)")};
  background-color: ${(props) =>
    props.$active ? "var(--color_main_skyblue)" : "var(--color_white)"};
  border-radius: 30px;
  color: ${(props) => (props.$active ? "var(--color_white)" : "var(--color_font)")};
  font-family: NotoSansBold;
  font-size: var(--text_body1);
  padding: 12px 40px;
  margin-right: 16px;
  cursor: pointer;
`;

const DropDown = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropButton = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: var(--color_sub1);
  border-radius: 12px;
  color: var(--color_font);
  font-family: NotoSansBold;
  font-size: var(--text_body1);
  background-color: var(--color_white);
  padding: 15px 33px;
`;

const DropDownContent = styled.div`
  background-color: var(--color_background);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 0 5px rgba(116, 116, 116, 0.4);
  position: absolute;
  width: 164px;
  z-index: 10;
`;

const DropDownItem = styled.div<{ $active: boolean }>`
  font-family: NotoSansMedium;
  font-size: var(--text_caption1);
  color: ${(props) => (props.$active ? "var(--color_white)" : "var(--color_font)")};
  padding: 5px 8px;
  margin: 1.5px 0px;
  display: flex;
  align-items: center;
  line-height: 1.6em;
  border-radius: 8px;
  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color_main_skyblue);
    `}

  .check {
    width: 25px;
  }
`;

const Empty = styled.div`
  content: "";
  background-color: red;
  width: 25px;
`;

export default CategoryBar;
