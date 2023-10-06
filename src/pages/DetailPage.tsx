import { useState, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { getAddProductItem, getProductItem } from "@/API";
import { carouselState } from "@/Atoms";
import AddProductAutoPlay from "@/components/DeatailPage/AddProductAutoPlay";
import DetailCategory from "@/components/DeatailPage/DetailCategory";
import DetailProduct from "@/components/DeatailPage/DetailProduct";
import ProductInfo from "@/components/DeatailPage/ProductInfo";
import { ProductItemGetResponse, ProductData } from "@/types";

const DetailPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams() as { id: string };
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
  const [carousel, setCarousel] = useRecoilState(carouselState);
  const productItemData = async (id: string) => {
    const productData = await getProductItem(id);
    setProductItem(productData);
  };

  const productAddItemData = async () => {
    const productAddData = await getAddProductItem();
    setProductAddItem(productAddData.content);
  };

  useEffect(() => {
    productItemData(id);
    productAddItemData();

    if (carousel) {
      window.scrollTo({ top: 2975, behavior: "smooth" });
      setCarousel(false);
    }
  }, []);
  return (
    <>
      <ProductInfo productItem={productItem} />
      {pathname === "/product/1" ? <DetailCategory /> : ""}
      <DetailProduct
        message={"first"}
        productImage={productItem.images}
      />
      {pathname === "/product/1" ? <Background></Background> : ""}
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
  height: 810px;
  position: absolute;
  top: 5717px;
`;

export default DetailPage;
