import { useState, useEffect } from "react";

import styled from "styled-components";

import { getAddProductItem, getProductItem } from "@/API";
import AddProductAutoPlay from "@/components/DeatailPage/AddProductAutoPlay";
import DetailCategory from "@/components/DeatailPage/DetailCategory";
import DetailProduct from "@/components/DeatailPage/DetailProduct";
import ProductInfo from "@/components/DeatailPage/ProductInfo";
import { ProductItemGetResponse, ProductData } from "@/types";

const DetailPage = () => {
  const [productItem, setProductItem] = useState<ProductItemGetResponse>({
    id: 0,
    name: "",
    subname: "",
    tags: [],
    previewImage: "",
    price: 0,
    status: "",
    stock: 0,
    images: [],
  });
  const [productAddItem, setProductAddItem] = useState<ProductData[]>([]);

  const productItemData = async () => {
    const productData = await getProductItem();
    setProductItem(productData);
  };

  const productAddItemData = async () => {
    const productAddData = await getAddProductItem();
    setProductAddItem(productAddData.content);
  };

  useEffect(() => {
    productItemData();
    productAddItemData();
  }, []);
  return (
    <>
      <ProductInfo productItem={productItem} />
      <DetailCategory />
      <DetailProduct
        message={"first"}
        productImage={productItem.images}
      />
      <Background></Background>
      <AddProductAutoPlay productAddItem={productAddItem} />
      <DetailProduct
        message={"last"}
        productImage={productItem.images}
      />
    </>
  );
};

const Background = styled.div`
  background-color: var(--color_sub5);
  width: 100%;
  height: 787px;
  position: absolute;
  top: 5707px;
`;

export default DetailPage;
