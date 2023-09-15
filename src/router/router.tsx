import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/layout/Layout";
import DetailPage from "@/pages/DetailPage";
import MainPage from "@/pages/MainPage";
import PurchasePage from "@/pages/PurchasePage";

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
            element={<PurchasePage />}
          />
          <Route
            path="/product/:id"
            element={<DetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
