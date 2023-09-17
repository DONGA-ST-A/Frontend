import React, { ChangeEvent, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";

const mailList = ["naver.com", "gmail.com", "daum.net", "hanmail.net", "nate.com", "직접 입력"];

const InquiryTable = () => {
  const [inquiry, setInquiry] = useState({
    title: "",
    mailFirst: "",
    mailSecond: "",
    description: "",
  });
  const [received, setReceived] = useState<boolean>(true);
  const [dropdown, setDropdown] = useState<string>("직접 입력");
  const [activeDropdown, setActvieDropdown] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiry({
      title: "",
      mailFirst: "",
      mailSecond: "",
      description: "",
    });
    setDropdown("직접 입력");
    setReceived(true);
    // TODO: 잘 등록되었다고 알려주는 토스트 넣기
    // 토스트 뜨고 이전 페이지로 이동?
  };

  return (
    <Container onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <SectionTitle>제목</SectionTitle>
            <Section>
              <input
                className="title"
                name="title"
                value={inquiry.title}
                onChange={handleChange}
              />
            </Section>
          </tr>
          <tr>
            <SectionTitle>이메일</SectionTitle>
            <Section>
              <div className="mail-input-container">
                <input
                  className="mail"
                  name="mailFirst"
                  value={inquiry.mailFirst}
                  onChange={handleChange}
                />
                <span>@</span>
                <input
                  className="mail"
                  name="mailSecond"
                  value={inquiry.mailSecond}
                  onChange={handleChange}
                  disabled={dropdown !== "직접 입력"}
                />
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
                      {mailList.map((item) => (
                        <DropDownItem
                          key={item}
                          $active={item === dropdown}
                          onClick={() => {
                            setDropdown(item);
                            if (item !== "직접 입력") setInquiry({ ...inquiry, mailSecond: item });
                            else setInquiry({ ...inquiry, mailSecond: "" });
                          }}
                        >
                          <span>{item}</span>
                        </DropDownItem>
                      ))}
                    </DropDownContent>
                  )}
                </DropDown>
              </div>
              <div className="mail-container">
                <span>답변여부를 메일로 받으시겠습니까?</span>
                <div className="radio-container">
                  <input
                    className="radio"
                    type="radio"
                    name="mail"
                    checked={received}
                    onClick={() => {
                      setReceived(true);
                    }}
                  />
                  <span>예</span>
                </div>
                <div className="radio-container">
                  <input
                    className="radio"
                    type="radio"
                    name="mail"
                    checked={!received}
                    onClick={() => {
                      setReceived(false);
                    }}
                  />
                  <span>아니오</span>
                </div>
              </div>
            </Section>
          </tr>
          <tr>
            <SectionTitle>본문</SectionTitle>
            <Section>
              <textarea
                name="description"
                value={inquiry.description}
                onChange={handleChange}
                rows={25}
              />
            </Section>
          </tr>
        </tbody>
      </table>
      <Button>
        <button type="submit">입력 완료하기</button>
      </Button>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;

  table {
    border-top: solid 1px;
    border-bottom: solid 1px;
    border-color: var(--color_sub3);
  }

  tr:nth-child(2) {
    border-top: solid 1px;
    border-bottom: solid 1px;
    border-color: var(--color_sub2);
  }
`;

const SectionTitle = styled.td`
  padding: 22px 33px;
  font-family: NotoSansBold;
  font-size: var(--text_body1);
  color: var(--color_sub3);
  vertical-align: middle;
  background-color: var(--color_background);
`;

const Section = styled.td`
  padding: 14px 25px;
  font-family: NotoSansMedium;
  font-size: var(--text_caption1);
  color: var(--color_sub3);

  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    border: solid 1px;
    border-color: var(--color_background);
    padding: 10px;
    font-size: var(--text_caption1);

    &:focus {
      outline: none;
    }
  }

  .title {
    width: 650px;
  }

  .mail-input-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    .mail {
      width: 170px;
    }
  }

  textarea {
    border: solid 1px;
    border-color: var(--color_background);
    resize: none;
    padding: 15px;
    color: var(--color_font);
    font-size: var(--text_caption1);

    &:focus {
      outline: none;
    }
  }

  .mail-container {
    display: flex;
    gap: 10px;

    .radio-container {
      .radio {
        accent-color: var(--color_sub3);
        cursor: pointer;
      }
    }
  }
`;

const DropDown = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropButton = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px;
  border-color: var(--color_background);
  color: var(--color_sub3);
  font-family: NotoSansMedium;
  font-size: var(--text_caption1);
  background-color: var(--color_white);
  padding: 10px;
`;

const DropDownContent = styled.div`
  background-color: var(--color_white);
  padding: 12px;
  box-shadow: 0 0 5px rgba(116, 116, 116, 0.4);
  position: absolute;
  width: 167px;
  z-index: 10;
`;

const DropDownItem = styled.div<{ $active: boolean }>`
  font-family: NotoSansMedium;
  font-size: var(--text_caption1);
  color: var(--color_font);
  padding: 5px 15px;
  margin: 1.5px 0px;
  display: flex;
  align-items: center;
  line-height: 1.6em;
  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color_sub2);
    `}

  .check {
    width: 25px;
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 42px;

  button {
    background-color: var(--color_white);
    border: solid 1px;
    border-color: var(--color_sub1);
    border-radius: 25px;
    font-family: NotoSansBold;
    font-size: var(--text_body1);
    color: var(--color_font);
    padding: 12px 40px;
    cursor: pointer;
  }
`;

export default InquiryTable;
