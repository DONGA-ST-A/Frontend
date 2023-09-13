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
      <ProductContainer>
        {products &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
      </ProductContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1230px;
  margin: 0 auto;
  margin-bottom: 152px;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export default Product;
