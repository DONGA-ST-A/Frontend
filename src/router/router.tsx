import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/etc/ScrollToTop";
import Layout from "@/layout/Layout";
import CompanyPage from "@/pages/CompanyPage";
import DetailPage from "@/pages/DetailPage";
import MainPage from "@/pages/MainPage";
import NoticeDetailPage from "@/pages/NoticeDetailPage";
import NoticePage from "@/pages/NoticePage";
import PurchasePage from "@/pages/PurchasePage";
import QnAPage from "@/pages/QnAPage";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="/faq"
            element={<QnAPage />}
          />
          <Route
            path="/product"
            element={<PurchasePage />}
          />
          <Route
            path="/notice"
            element={<NoticePage />}
          />
          <Route
            path="/notice/:category/:noticeId"
            element={<NoticeDetailPage />}
          />
          <Route
            path="/product/:id"
            element={<DetailPage />}
          />
          <Route
            path="/company"
            element={<CompanyPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
