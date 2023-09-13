import { useState, useEffect } from "react";

import styled from "styled-components";

import { getProducts } from "@/API";
import { ProductData } from "@/types";

import CategoryBar from "./CategoryBar";
import ProductItem from "./ProductItem";

const Product = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  const GetProducts = async () => {
    const productData = await getProducts();
    console.log(productData);
    setProducts(productData.content);
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <Container>
      <CategoryBar />
      {products &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 1230px;
  margin: 0 auto;
`;

export default Product;
