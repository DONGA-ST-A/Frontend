import styled from "styled-components";

import CategoryBar from "./CategoryBar";
import ProductItem from "./ProductItem";

const Product = () => {
  return (
    <Container>
      <CategoryBar />
      <ProductItem
        main={true}
        soldOut={true}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 1230px;
  margin: 0 auto;
`;

export default Product;
