import styled from "styled-components";

import CategoryBar from "./CategoryBar";

const Product = () => {
  return (
    <Container>
      <CategoryBar />
    </Container>
  );
};

const Container = styled.div`
  width: 1230px;
  margin: 0 auto;
`;

export default Product;
