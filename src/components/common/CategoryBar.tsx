import { ChangeEvent } from "react";

import styled from "styled-components";

import SearchIcon from "@/assets/icon/icon_search_gray.svg";

const CategoryBar = ({
  categoryList,
  category,
  keyword,
  setCategory,
  setKeyword,
  setPage,
  getData,
  getKeywordData,
  getCategoryData,
}: {
  categoryList: string[];
  category: string;
  keyword: string;
  setCategory: (category: string) => void;
  setKeyword: (keyword: string) => void;
  setPage: (page: number) => void;
  getData: () => Promise<void>;
  getKeywordData: (keyword: string) => Promise<void>;
  getCategoryData: (category: string) => Promise<void>;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword !== "") getKeywordData(keyword);
    else getKeywordData(" ");
    setCategory("전체");
    setPage(1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <Container>
      <div>
        {categoryList.map((cate) => (
          <Button
            key={cate}
            $active={category === cate}
            onClick={() => {
              setCategory(cate);
              if (cate === "전체") getData();
              else getCategoryData(cate);
              setKeyword("");
            }}
          >
            {cate}
          </Button>
        ))}
      </div>
      <Input onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="키워드를 검색해보세요."
          value={keyword}
          onChange={handleChange}
        />
        <button>
          <img
            alt="검색 아이콘"
            src={SearchIcon}
          />
        </button>
      </Input>
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
  font-size: 20px;
  padding: 12px 32px;
  margin-right: 16px;
  cursor: pointer;
`;

const Input = styled.form`
  border: solid 1px;
  border-color: var(--color_sub1);
  border-radius: 36px;
  display: flex;
  align-items: center;
  padding: 5px 30px;
  gap: 20px;

  input {
    border: none;
    width: 350px;
    color: var(--color_font);
    font-family: NotoSansMedium;
    font-size: 20px;
    caret-width: 1px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--color_sub2);
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    img {
      width: 25px;
    }
  }
`;

export default CategoryBar;
