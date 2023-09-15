import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPage,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPage: number;
}) => {
  return (
    <Container>
      <div
        className="page-btn"
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
      >
        <IoIosArrowBack size="25" />
      </div>
      {totalPage > 0 &&
        Array(totalPage)
          .fill(undefined)
          .map((_, i) => (
            <div
              className={`page-btn ${currentPage === i + 1 && "active"}`}
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
              }}
            >
              {i + 1}
            </div>
          ))}
      <div
        className="page-btn"
        onClick={() => {
          if (currentPage < totalPage) setCurrentPage(currentPage + 1);
        }}
      >
        <IoIosArrowForward size="25" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .page-btn {
    background-color: var(--color_white);
    font-size: var(--text_body1);
    font-family: NotoSansBold;
    color: var(--color_font);
    width: 44px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    margin: 0px 20px;
    cursor: pointer;
  }

  .active {
    color: var(--color_white);
    background-color: var(--color_main_skyblue);
  }
`;

export default Pagination;
