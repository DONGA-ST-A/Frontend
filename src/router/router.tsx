import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "@/components/PurchasePage/Product";
import Layout from "@/layout/Layout";
import MainPage from "@/pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="/product"
            element={<Product />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
