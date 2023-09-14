import { useState, useEffect } from "react";

import styled from "styled-components";

import { getProducts } from "@/API";
import { ProductData } from "@/types";

import CategoryBar from "./CategoryBar";
import ProductItem from "./ProductItem";

const Product = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [category, setCategory] = useState<string>("전체");

  const GetProducts = async () => {
    const productData = await getProducts();
    setProducts(productData.content);
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <Container>
      <CategoryBar
        category={category}
        setCategory={setCategory}
      />
      <ProductContainer>
        {products &&
          (category === "전체"
            ? products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                />
              ))
            : products
                .filter((product) => product.tags.includes(category))
                .map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                  />
                )))}
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
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 1483px;
  gap: 19px;
`;

export default Product;
