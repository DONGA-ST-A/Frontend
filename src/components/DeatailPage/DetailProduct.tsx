import styled from "styled-components";

const DetailProduct = ({ productImage, message }: { productImage: string[]; message: string }) => {
  return (
    <Container>
      {productImage &&
        productImage.map((image, idx, arr) => {
          if (message === "first" && arr[6] !== image) {
            return (
              <div
                key={idx}
                className={`image${idx + 1}`}
              >
                <img
                  src={image}
                  alt={`이미지${idx + 1}`}
                />
              </div>
            );
          }
          if (message === "last" && image === arr[6]) {
            return (
              <>
                <div
                  key={idx}
                  className={`image${idx + 1}`}
                >
                  <img
                    src={image}
                    alt={`이미지${idx + 1}`}
                  />
                </div>
              </>
            );
          }
        })}
    </Container>
  );
};
const Container = styled.div`
  width: 1415px;
  margin: auto;
  div {
    zoom: 0.8;
    display: flex;
  }
  img {
    margin: 0 auto;
  }

  .image1 {
    margin-top: 135px;
  }
  .image2,
  .image4 {
    margin-top: 240px;
  }
  .image3 {
    margin-top: 330px;
  }
  .image4 {
    zoom: 0.9;
  }
  .image4 img {
    transform: scale(1.05);
  }
  .image5 {
    margin-top: 376px;
    position: relative;
    flex-direction: column;
    z-index: 12;
  }

  .image5::before {
    content: "구성품";
    width: auto;
    height: auto;
    display: block;
    font-size: var(--text_title1);
    color: var(--color_font);
    font-family: NotoSansBold;
    margin-left: 175px;
    margin-bottom: 144px;
  }
  .image5::after {
    content: "제품 구매 시 구성품을 확인하세요.";
    width: auto;
    height: auto;
    display: block;
    font-size: var(--text_subtitle1);
    color: var(--color_sub3);
    font-family: NotoSansMedium;
    position: absolute;
    top: 80px;
    left: 0;

    margin-left: 175px;
  }
  .image5 img {
    background-color: var(--color_sub5);

    background-size: cover;
  }
  .image6 {
    margin: 240px auto 240px;
  }
  .image7 {
    margin: 240px auto 372px;
  }
`;
export default DetailProduct;
